"use client";

import { useEffect } from "react";

export default function Protection() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();

    const preventKeys = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl+S
      if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }

      // Ctrl+U
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }

      // Ctrl+Shift+I
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "i"
      ) {
        e.preventDefault();
      }

      // Ctrl+Shift+J
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "j"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", preventKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventKeys);
    };
  }, []);

  return null;
}