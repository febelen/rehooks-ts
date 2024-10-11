"use client";

import { useState, useEffect } from "react";

export function useClipboard(timeout: number = 1500) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied, timeout]);

  const copy = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          alert("Failed to copy text");
        });
    } else {
      alert("Copy not supported");
    }
  };

  return { isCopied, copy };
}
