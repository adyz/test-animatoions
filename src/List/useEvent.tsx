import { useState, useEffect } from "react";
import { items } from "./items";

export function useEvents(itemsProps: typeof items) {
  const [currSecond, setCurrSecond] = useState(0);
  const [evs, setEvs] = useState<typeof items>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvs(itemsProps.filter((item) => item.second <= currSecond));
      setCurrSecond((prevSecond) => {
        return prevSecond + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currSecond, itemsProps]);

  return {
    events: evs,
    currSecond
  };
}
