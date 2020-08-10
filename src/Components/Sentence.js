import React, { useState } from "react";

const RandomSentence = ({
  splitRandomSentence,
  splitSentence,
  gameOver,
  seconds,
}) => {
  const empty = [];
  return (
    <>
      <div className="sentence">
        {splitRandomSentence.map((word, index) => {
          let opacity;
          if (index < splitSentence.length) {
            if (word === splitSentence[index]) {
              opacity = "correct";
              empty.push(word);
            } else {
              opacity = "wrong";
            }
          }
          console.log(empty);
          return (
            <span key={index} className={opacity}>
              {word + " "}
            </span>
          );
        })}
      </div>
      <div className="correct-words">
        {gameOver && empty.length > 0 ? (
          <div>
            <span>You spelt these words corrctly in {60 - seconds}seconds</span>
            {empty.map((s, i) => {
              return <div key={i}>{s}</div>;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RandomSentence;
