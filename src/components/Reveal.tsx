"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
}>;

export default function Reveal({ className = "", children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    io.observe(element);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} data-state={visible ? "visible" : "hidden"}>
      {children}
    </div>
  );
}


