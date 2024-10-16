import { useCallback, useState, useEffect } from "react";

type CountdownOptions = {
  countStart: number;
  intervalMs?: number;
  countStop?: number;
};

type CountdownControllers = {
  startCountdown: () => void;
  stopCountdown: () => void;
  resetCountdown: () => void;
};

export function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
}: CountdownOptions): [number, CountdownControllers] {
  const [count, setCount] = useState(countStart);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(
    null,
  );

  const startCountdown = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
    }
  }, [isRunning]);

  const stopCountdown = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    setIsRunning(false);
  }, [timer]);

  const resetCountdown = useCallback(() => {
    stopCountdown();
    setCount(countStart);
  }, [stopCountdown, countStart]);

  useEffect(() => {
    if (isRunning) {
      setTimer(
        setInterval(() => {
          setCount((prevCount) => {
            if (prevCount <= countStop) {
              stopCountdown();
              return countStop;
            }
            return prevCount - 1;
          });
        }, intervalMs),
      );
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, intervalMs, countStop, stopCountdown]);

  return [count, { startCountdown, stopCountdown, resetCountdown }];
}
