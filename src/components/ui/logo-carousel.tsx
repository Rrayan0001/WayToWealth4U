"use client";

import { memo, useEffect, useMemo, useState, type SVGProps } from "react";

import styles from "./logo-carousel.module.css";

export type CarouselLogo = {
  name: string;
  id: number;
  img: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
};

type LogoCarouselProps = {
  columnCount?: number;
  logos: CarouselLogo[];
};

type LogoColumnProps = {
  logos: CarouselLogo[];
  index: number;
  currentTime: number;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function distributeLogos(allLogos: CarouselLogo[], columnCount: number): CarouselLogo[][] {
  const shuffled = shuffleArray(allLogos);
  const columns: CarouselLogo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((column) => column.length));

  columns.forEach((column) => {
    while (column.length < maxLength) {
      column.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
}

const LogoColumn = memo(function LogoColumn({ logos, index, currentTime }: LogoColumnProps) {
  const cycleInterval = 2000;
  const columnDelay = index * 220;
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const currentLogo = logos[currentIndex];
  const CurrentLogoIcon = currentLogo.img;

  return (
    <article className={styles.card} aria-label={currentLogo.name}>
      <div className={styles.logoSlot}>
        <div key={`${currentLogo.id}-${currentIndex}-${index}`} className={styles.logoSwap}>
          <CurrentLogoIcon className={styles.logo} />
        </div>
      </div>
      <p>{currentLogo.name}</p>
    </article>
  );
});

export function LogoCarousel({ columnCount = 4, logos }: LogoCarouselProps) {
  const [currentTime, setCurrentTime] = useState(0);

  const logoSets = useMemo(() => distributeLogos(logos, columnCount), [logos, columnCount]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTime((previous) => previous + 100);
    }, 100);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={styles.grid} aria-label="Partner bank logos">
      {logoSets.map((columnLogos, index) => (
        <LogoColumn key={`column-${index}`} logos={columnLogos} index={index} currentTime={currentTime} />
      ))}
    </div>
  );
}
