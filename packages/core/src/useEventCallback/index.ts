import { useRef, useEffect, useCallback } from "react";

/**
 * A hook that returns a memoized version of a callback that is stable between renders.
 *
 * @param fn The callback function that depends on external values.
 * @returns A stable version of the provided callback.
 */
export function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef<T>(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(((...args) => ref.current(...args)) as T, []);
}
