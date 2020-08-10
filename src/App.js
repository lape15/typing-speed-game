import React, { useState } from "react";
import "./App.css";
import RandomSentence from "./Components/Sentence";
import TextArea from "./Components/Input";
var requireSentence = require("random-sentence");

const App = () => {
  const [sentence, setSentence] = useState("");

  const [sameWord, setSameWord] = useState(false);

  const [randomSentence] = useState(
    requireSentence({ words: Math.floor(Math.random() * 10) })
  );

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  let splitSentence = sentence.split(" ");
  let splitRandomSentence = randomSentence.split(" ");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   splitSentence = sentence.split(" ");
  //   splitRandomSentence = randomSentence.split(" ");
  // };

  // console.log(splitSentence);
  // console.log(splitRandomSentence);

  return (
    <div className="App">
      <div className="container">
        <RandomSentence
          randomSentence={randomSentence}
          splitRandomSentence={splitRandomSentence}
          splitSentence={splitSentence}
        />
        <TextArea
          // handleSubmit={handleSubmit}
          handleSentenceChange={handleSentenceChange}
          sentence={sentence}
        />
      </div>

      <div className="preview"></div>
    </div>
  );
};

export default App;
