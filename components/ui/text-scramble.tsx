'use client';
import { type JSX, useEffect, useState, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameId = useRef<number>(0);
  const startTime = useRef<number>(0);
  const lastUpdate = useRef<number>(0);

  const scramble = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp;
    const elapsed = (timestamp - startTime.current) / 1000;
    const progress = Math.min(elapsed / duration, 1);

    // Throttle updates based on speed prop
    if (timestamp - lastUpdate.current >= speed * 1000) {
      let scrambled = '';
      for (let i = 0; i < children.length; i++) {
        if (children[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * children.length > i) {
          scrambled += children[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      lastUpdate.current = timestamp;
    }

    if (progress < 1) {
      frameId.current = requestAnimationFrame(scramble);
    } else {
      setDisplayText(children);
      setIsAnimating(false);
      onScrambleComplete?.();
    }
  };

  useEffect(() => {
    if (!trigger || isAnimating) return;

    setIsAnimating(true);
    startTime.current = 0;
    lastUpdate.current = 0;
    frameId.current = requestAnimationFrame(scramble);

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [trigger, children]);

  return (
    <MotionComponent className={className} {...props}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">{displayText}</span>
    </MotionComponent>
  );
}
