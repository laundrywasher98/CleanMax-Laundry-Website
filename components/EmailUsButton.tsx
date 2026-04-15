"use client";

import { useState, useRef, useEffect } from "react";

const EMAIL = "laundry@cleanmaxlaundry.com";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function EmailUsButton({ className, children }: Props) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleClick() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(
        () => {
          setCopied(true);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setCopied(false), 2500);
        },
        () => {},
      );
    }
  }

  return (
    <span className="relative inline-flex flex-col items-start">
      <a
        href={`mailto:${EMAIL}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      {copied && (
        <span
          role="status"
          aria-live="polite"
          className="mt-2 font-sans text-xs text-brand-dark/70"
        >
          Copied: {EMAIL}
        </span>
      )}
    </span>
  );
}
