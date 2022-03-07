import { useState, useEffect } from "react";
import { Timer } from "../utils/timer";
interface CountdownProps {
  nb: number;
  onDone: () => void;
}

export const Countdown = (props: CountdownProps) => {
  const time = Timer(props.nb, props.onDone);
  return (
    <>
      <p>{time} secondes</p>
    </>
  );
};
