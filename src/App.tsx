import React, { useState } from "react";
import { Countdown } from "./components/CountdownComponent";
import { AwnserButton } from "./components/AwnserButtonComponent";
import "./App.css";

export const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const question = [
    {
      questionNmber: 0,
      questionText: "1 question ",
      questionAwnser: false,
    },
    {
      questionNmber: 1,
      questionText: "2 question",
      questionAwnser: true,
    },
    {
      questionNmber: 2,
      questionText: "3 question",
      questionAwnser: true,
    },
    {
      questionNmber: 3,
      questionText: "4 question",
      questionAwnser: true,
    },
    {
      questionNmber: 4,
      questionText: "5 question",
      questionAwnser: true,
    },
  ];

  const onDone = (): void => {
    setCurrentQuestion((prev) => (prev += 1));
  };

  const onAwnsering = (awnser: boolean): void => {
    if (awnser == question[currentQuestion].questionAwnser) {
      setCurrentScore((prev) => (prev += 1));
    } else {
      setCurrentScore((prev) => (prev -= 1));
    }
    onDone()
  };


  return (
    <div className="App">
      <Countdown nb={currentQuestion} onDone={onDone} />
      <p>{question[currentQuestion].questionText}</p>
      <AwnserButton onAwnsering={onAwnsering} />
      <p>{currentScore}</p>
    </div>
  );
};

export default App;
