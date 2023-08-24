import { useEffect, useState } from "react";
export default function useDebounce(
  initializeValue = "",
  delay = 1000,
  callback = () => {}
) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, delay);
    return () => {
      callback();
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);
  return debounceValue;
}
