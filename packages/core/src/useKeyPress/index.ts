import { useState, useEffect } from "react";

interface KeyConfig {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
}

/**
 * Key configuration object for the useKeyPress hook.
 *
 * @typedef {Object} KeyConfig
 * @property {string} key - The key to listen for.
 * @property {boolean} [ctrl] - Whether the Ctrl key must be pressed. Optional.
 * @property {boolean} [alt] - Whether the Alt key must be pressed. Optional.
 * @property {boolean} [shift] - Whether the Shift key must be pressed. Optional.
 */

/**
 * Custom hook to detect if a specified key is pressed.
 *
 * @param {KeyConfig} config - The configuration for the key press detection.
 * @returns {boolean} - A boolean value indicating whether the specified key combination is currently pressed.
 *
 * @example
 * // Usage:
 * const isEnterPressed = useKeyPress({ key: "Enter" });
 * const isCtrlSPressed = useKeyPress({ key: "s", ctrl: true });
 */

export function useKeyPress(config: KeyConfig): boolean {
  const [keyPressed, setKeyPressed] = useState(false);
  const { key: targetKey, ctrl, alt, shift } = config;

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key, ctrlKey, altKey, shiftKey } = e;

    if (
      (!ctrl && !alt && !shift && key === targetKey) ||
      (ctrl && key === targetKey && ctrlKey === ctrl) ||
      (alt && key === targetKey && altKey === alt) ||
      (shift && key === targetKey && shiftKey === shift)
    ) {
      setKeyPressed(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const { key, ctrlKey, altKey, shiftKey } = e;

    if (
      (!ctrl && !alt && !shift && key === targetKey) ||
      (ctrl && key === targetKey && ctrlKey === ctrl) ||
      (alt && key === targetKey && altKey === alt) ||
      (shift && key === targetKey && shiftKey === shift)
    ) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keyPressed;
}
