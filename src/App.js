import React, { useState, useEffect } from "react";
import "./App.css";
import RandomSentence from "./Components/Sentence";
import TextArea from "./Components/Input";
var requireSentence = require("random-sentence");

const App = () => {
  const [sentence, setSentence] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [correctWord, setCorrectWord] = useState(0);
  const [randomSentence, setRandomSentence] = useState(
    requireSentence({ words: Math.floor(Math.random() * 20) })
  );

  useEffect(() => {
    let interval = null;
    interval = setTimeout(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds === 0) {
      // restartGame();
      clearInterval(interval);
      setTimeout(restartGame, 2500);
    }
    if (sentence === randomSentence) {
      setGameOver(true);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, sentence, randomSentence]);

  // const userFinish = () => {
  //   setGameOver(false);
  //   setSeconds(45);
  // };

  const restartGame = () => {
    setRandomSentence(
      requireSentence({ words: Math.floor(Math.random() * 20) })
    );
    setGameOver(false);
    setSeconds(60);
    setSentence("");
  };
  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  let splitSentence = sentence.split(" ");
  let splitRandomSentence = randomSentence.split(" ");

  return (
    <div className="App">
      <div className="container">
        <h2>Test out your typing skills</h2>
        <div>
          {seconds}s {seconds === 0 ? <span>Game Over</span> : null}
          {sentence === randomSentence ? <span>You win</span> : null}
        </div>
        <RandomSentence
          randomSentence={randomSentence}
          splitRandomSentence={splitRandomSentence}
          splitSentence={splitSentence}
          gameOver={gameOver}
          seconds={seconds}
          sentence={sentence}
        />
        <TextArea
          // handleSubmit={handleSubmit}
          handleSentenceChange={handleSentenceChange}
          sentence={sentence}
          gameOver={gameOver}
        />
        <button onClick={restartGame}>Generate sentence</button>
      </div>
    </div>
  );
};

export default App;
