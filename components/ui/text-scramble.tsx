'use client';
import { type JSX, useEffect, useRef } from 'react';
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
  
  // Use a ref for the display element to bypass React state for animations
  const displayRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);
  const frameId = useRef<number>(0);
  const startTime = useRef<number>(0);
  const lastUpdate = useRef<number>(0);

  // Pre-calculate length and character set for micro-optimization
  const childrenLength = children.length;
  const charsLength = characterSet.length;

  const scramble = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp;
    const elapsed = (timestamp - startTime.current) / 1000;
    const progress = Math.min(elapsed / duration, 1);

    // Throttle updates based on speed prop
    // Use 40ms (25fps) as a minimum floor to save CPU cycles on mobile
    const throttleThreshold = Math.max(speed * 1000, 40);

    if (timestamp - lastUpdate.current >= throttleThreshold) {
      let scrambled = '';
      for (let i = 0; i < childrenLength; i++) {
        const char = children[i];
        if (char === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * childrenLength > i) {
          scrambled += char;
        } else {
          scrambled += characterSet[Math.floor(Math.random() * charsLength)];
        }
      }

      // DIRECT DOM UPDATE: .textContent is slightly faster than .innerText
      if (displayRef.current) {
        displayRef.current.textContent = scrambled;
      }
      
      lastUpdate.current = timestamp;
    }

    if (progress < 1) {
      frameId.current = requestAnimationFrame(scramble);
    } else {
      if (displayRef.current) {
        displayRef.current.textContent = children;
      }
      isAnimating.current = false;
      onScrambleComplete?.();
    }
  };

  useEffect(() => {
    if (!trigger || isAnimating.current) return;

    isAnimating.current = true;
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
      <span ref={displayRef} aria-hidden="true">{children}</span>
    </MotionComponent>
  );
}
