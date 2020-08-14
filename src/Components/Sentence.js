import React from "react";

const RandomSentence = ({
  splitRandomSentence,
  splitSentence,
  seconds,
  sentence,
  randomSentence,
}) => {
  const empty = [];

  return (
    <>
      <div className="sentence">
        {splitRandomSentence.map((word, index) => {
          let opacity;
          if (index < splitSentence.length) {
            if (word === splitSentence[index]) {
              empty.push(word);
              let splitWord = word.split("");
              let splitSingleSentence = splitSentence[index].split("");
              for (let i = 0; i < splitWord.length; i++) {
                if (splitWord[i] === splitSingleSentence[i]) {
                  opacity = "correct";
                }
              }
            } else {
              opacity = "wrong";
            }
          }

          return (
            <span key={index} className={opacity}>
              {word + " "}
            </span>
          );
        })}
      </div>
      <div
        className={`${
          empty.length > 0 && sentence === randomSentence
            ? "correct-words"
            : "hidden"
        }`}
      >
        {empty.length > 0 && sentence === randomSentence ? (
          <div className="spelt">
            <span>
              {empty.length}/{60 - seconds} words/sec
            </span>{" "}
            <br />
            <span>
              {randomSentence.length} characters spelt in {60 - seconds}s
            </span>
          </div>
        ) : null}
      </div>
      <div
        className={`${
          empty.length > 0 && seconds === 0 ? "correct-words" : "hidden"
        }`}
      >
        {empty.length > 0 && seconds === 0 && sentence !== randomSentence ? (
          <div className="spelt">
            <span>
              {empty.length} words spelt correctly out of{" "}
              {splitRandomSentence.length} in {30 - seconds}s
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RandomSentence;
