import React, { useState, useEffect } from "react";
import "./App.css";
import RandomSentence from "./Components/Sentence";
import TextArea from "./Components/Input";
var requireSentence = require("random-sentence");

const App = () => {
  const [sentence, setSentence] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const [randomSentence, setRandomSentence] = useState(
    requireSentence({ words: Math.floor(Math.random() * 30) })
  );

  // const handleEasy = () => {
  // setEasy(true)
  // }
  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 500);
    }

    if (seconds === 0) {
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
  }, [seconds, sentence, randomSentence, startTimer]);

  const restartGame = () => {
    setRandomSentence(
      requireSentence({ words: Math.floor(Math.random() * 40) })
    );
    setGameOver(false);
    setSeconds(30);
    setSentence("");
    setStartTimer(false);
  };
  const handleSentenceChange = (e) => {
    // setStartTimer(true);
    setSentence(e.target.value);
  };

  let splitSentence = sentence.split(" ");
  let splitRandomSentence = randomSentence.split(" ");

  return (
    <div className="App">
      <div className="container">
        <h2>Test out your typing skills</h2>
        <div className="sec">
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
          handleSentenceChange={handleSentenceChange}
          sentence={sentence}
          gameOver={gameOver}
          setStartTimer={setStartTimer}
        />
        <button onClick={restartGame}>Generate sentence</button>
      </div>
    </div>
  );
};

export default App;
