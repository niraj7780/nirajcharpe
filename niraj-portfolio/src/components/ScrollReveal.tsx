"use client";

import React, { useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = "", ...props }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 ease-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface StaggeredRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function StaggeredReveal({ children, delay = 100, className = "", ...props }: StaggeredRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className} {...props}>
      {childrenArray.map((child, index) => {
        if (typeof child === "object" && child !== null && "props" in child) {
          const element = child as ReactElement<Record<string, unknown>>;
          const elementProps = element.props;
          return React.cloneElement(element, {
            className: `${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 ease-out ${(elementProps.className as string) || ""}`,
            style: {
              ...((elementProps.style as CSSProperties) || {}),
              transitionDelay: `${index * delay}ms`,
            },
          });
        }
        return child;
      })}
    </div>
  );
}