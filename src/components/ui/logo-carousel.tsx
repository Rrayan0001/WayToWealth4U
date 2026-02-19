"use client";

import { memo, useEffect, useState, type SVGProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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

function distributeLogos(allLogos: CarouselLogo[], columnCount: number, shuffle: boolean): CarouselLogo[][] {
  const selectedLogos = shuffle ? shuffleArray(allLogos) : allLogos;
  const columns: CarouselLogo[][] = Array.from({ length: columnCount }, () => []);

  selectedLogos.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((column) => column.length));

  columns.forEach((column) => {
    while (column.length < maxLength) {
      if (shuffle) {
        column.push(selectedLogos[Math.floor(Math.random() * selectedLogos.length)]);
      } else {
        column.push(selectedLogos[column.length % selectedLogos.length]);
      }
    }
  });

  return columns;
}

const LogoColumn = memo(function LogoColumn({ logos, index, currentTime }: LogoColumnProps) {
  const reduceMotion = useReducedMotion();
  const cycleInterval = 2000;
  const columnDelay = index * 220;
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const currentLogo = logos[currentIndex];
  const CurrentLogoIcon = currentLogo.img;

  return (
    <motion.article
      className={styles.card}
      aria-label={currentLogo.name}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              delay: index * 0.08,
              duration: 0.46,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <div className={styles.logoSlot}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}-${index}`}
            className={styles.logoSwap}
            initial={reduceMotion ? { opacity: 1 } : { y: "12%", opacity: 0, filter: "blur(8px)" }}
            animate={reduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-18%", opacity: 0, filter: "blur(6px)" }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : {
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                    mass: 1,
                    bounce: 0.2,
                    duration: 0.5,
                  }
            }
          >
            <CurrentLogoIcon className={styles.logo} />
          </motion.div>
        </AnimatePresence>
      </div>
      <p>{currentLogo.name}</p>
    </motion.article>
  );
});

export function LogoCarousel({ columnCount = 4, logos }: LogoCarouselProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [logoSets, setLogoSets] = useState<CarouselLogo[][]>(() => distributeLogos(logos, columnCount, false));

  useEffect(() => {
    setLogoSets(distributeLogos(logos, columnCount, true));
  }, [logos, columnCount]);

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
