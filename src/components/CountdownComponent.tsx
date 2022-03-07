import { useState, useEffect } from "react";

interface CountdownProps {
  nb: number;
  onDone: () => void;
}

export const Countdown = (props: CountdownProps) => {
  const [timer, setTimer] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(props.nb)


  useEffect(() => {
    if(currentQuestion != props.nb){
        setTimer(30);
        setCurrentQuestion(props.nb)
    }
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 100);
    if (timer == 0) {
      props.onDone();
      
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <p>{timer} s</p>
      <p></p>
    </div>
  );
};
