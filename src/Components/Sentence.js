import React from "react";

const RandomSentence = ({
  splitRandomSentence,
  splitSentence,
  gameOver,
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
            if (word.toLowerCase() === splitSentence[index].toLowerCase()) {
              opacity = "correct";
              empty.push(word);
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
            <span>Spelt words in {60 - seconds}seconds</span>
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
