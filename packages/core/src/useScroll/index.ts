import { useCallback, useEffect, useState } from "react";

/**
 * A custom hook that tracks whether the horizontal scroll position exceeds a given threshold.
 *
 * @param {number} threshold - The scroll threshold in pixels to determine when the scroll state changes.
 * @returns {boolean} `true` if the horizontal scroll position is greater than the threshold, otherwise `false`.
 *
 * @example
 * // Usage example:
 * const isScrolled = useScroll(100);
 * if (isScrolled) {
 *   console.log("The scroll position is greater than 100 pixels.");
 * }
 */
export function useScroll(threshold: number): boolean {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollX > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
