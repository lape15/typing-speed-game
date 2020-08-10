import React, { useState, useEffect } from "react";
import "./App.css";
import RandomSentence from "./Components/Sentence";
import TextArea from "./Components/Input";
var requireSentence = require("random-sentence");

const App = () => {
  const [sentence, setSentence] = useState("");
  const [seconds, setSeconds] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [correctWord, setCorrectWord] = useState(0);
  const [randomSentence] = useState(
    requireSentence({ words: Math.floor(Math.random() * 20) })
  );

  useEffect(() => {
    let interval = null;
    interval = setTimeout(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds === 0 || sentence === randomSentence) {
      userFinish();
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, sentence, randomSentence]);

  const userFinish = () => {
    setGameOver(true);
  };

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  let splitSentence = sentence.split(" ");
  let splitRandomSentence = randomSentence.split(" ");

  const [randomSentenceTotal] = useState(splitRandomSentence.length);

  return (
    <div className="App">
      <div className="container">
        <div>
          {seconds}s {seconds === 0 ? <span>Game Over</span> : null}
        </div>
        <RandomSentence
          randomSentence={randomSentence}
          splitRandomSentence={splitRandomSentence}
          splitSentence={splitSentence}
          gameOver={gameOver}
          seconds={seconds}
        />
        <TextArea
          // handleSubmit={handleSubmit}
          handleSentenceChange={handleSentenceChange}
          sentence={sentence}
          gameOver={gameOver}
        />
      </div>

      <div className="preview"></div>
    </div>
  );
};

export default App;
