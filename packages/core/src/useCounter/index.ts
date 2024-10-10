import {
  useCallback,
  useState,
  type SetStateAction,
  type Dispatch,
} from "react";

type CounterReturnType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export function useCounter(initialValue?: number): CounterReturnType {
  const [count, setCount] = useState(initialValue ?? 0);

  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);
  const reset = useCallback(() => {
    setCount(initialValue ?? 0);
  }, [initialValue]);

  return {
    increment,
    decrement,
    reset,
    count,
    setCount,
  };
}
