import { useEffect, useRef, type RefObject } from "react";

/**
 * A custom hook to add and clean up an event listener on any target element.
 *
 * @param eventName The event type (e.g. 'click', 'scroll', 'resize', etc.).
 * @param handler The event handler function.
 * @param element Optional: The target element to attach the event listener to (defaults to window).
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: RefObject<HTMLElement> | Window,
): void {
  const savedHandler = useRef<(event: WindowEventMap[K]) => void>(handler);

  // Update the ref.current value if the handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: HTMLElement | Window =
      element && "current" in element ? element.current! : window;

    if (!targetElement) return;

    // Type assertion is added here to ensure TypeScript understands the event type correctly
    const eventListener: EventListener = (event) =>
      savedHandler.current(event as WindowEventMap[K]);

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
