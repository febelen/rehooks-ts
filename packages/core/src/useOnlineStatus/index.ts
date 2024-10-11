import { useState, useEffect } from "react";

/**
 * Custom hook that returns the current online/offline status of the browser.
 * Optionally, takes a callback function to be invoked whenever the status changes.
 *
 * @param {function} callback - Optional callback to run on status change.
 * @returns {boolean} - `true` if online, `false` if offline.
 */
export function useOnlineStatus(
  callback?: (isOnline: boolean) => void,
): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (callback) callback(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      if (callback) callback(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [callback]);

  return isOnline;
}
