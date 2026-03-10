"use client";

import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import styles from "./logo-carousel.module.css";

import Image from "next/image";

export type CarouselLogo = {
  name: string;
  id: number;
  img: string;
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
  const cycleInterval = 3500;
  const columnDelay = index * 300;
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const currentLogo = logos[currentIndex];

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
        <AnimatePresence initial={false}>
          <motion.div
            key={`${currentLogo.id}-${currentIndex}-${index}`}
            className={styles.logoSwap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={currentLogo.img}
              alt={currentLogo.name}
              width={200}
              height={60}
              className={styles.logo}
            />
            <span className={styles.bankName}>{currentLogo.name}</span>
          </motion.div>
        </AnimatePresence>
      </div>
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
