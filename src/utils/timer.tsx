import { useState, useEffect } from "react";


export const Timer = (nb : number, onDone: () => void) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => setTimer(30), [nb]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer == 0) {
      onDone();
    }
    return () => clearInterval(interval);
  }, [timer]);
  return timer
};
