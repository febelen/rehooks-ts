import { useState, useRef } from "react";
import { useEventListener } from "./../useEventListener";

/**
 * A custom hook to track whether an element is hovered.
 *
 * @returns A tuple containing a ref to attach to the element and a boolean indicating if it's hovered.
 */
export function useHover<T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean,
] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEventListener("mouseenter", handleMouseEnter, ref);
  useEventListener("mouseleave", handleMouseLeave, ref);

  return [ref, isHovered];
}
