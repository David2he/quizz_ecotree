import React, { useState } from "react";
import { Countdown } from "./../components/CountdownComponent";
import { AwnserButton } from "./../components/AwnserButtonComponent";
import { question } from "../utils/question";
import "./../App.css";
import Icon from "../assets/imgs/Icon";

export const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameIsEnd, setGameIsEnd] = useState(false);

  const endGame = () => {
    setGameIsEnd(true);
  };

  const onDone = (): void => {
    if (currentQuestion === question.length - 1) return endGame();
    setCurrentQuestion((prev) => (prev += 1));
  };

  const onAwnsering = (awnser: boolean): void => {
    if (awnser == question[currentQuestion].questionAwnser)
      setCurrentScore((prev) => (prev += 1));

    onDone();
  };

  return (
    <div className="App">
      <Icon />
      {gameIsEnd ? (
        <>
          <p className="end-gamme-text">well play!</p>
          <p>your score is {currentScore}</p>
          <p>awser is in the code ^^</p>
        </>
      ) : (
        <>
          <Countdown nb={currentQuestion} onDone={onDone} />
          <p>{question[currentQuestion].questionText}</p>
          <AwnserButton onAwnsering={onAwnsering} />
        </>
      )}
    </div>
  );
};
