import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<Props> = ({ to, duration = 2.5, suffix = '', className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView) return;

    const controls = animate(0, to, {
      duration,
      onUpdate(value) {
        node.textContent = Math.floor(value).toLocaleString() + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [to, duration, isInView, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};