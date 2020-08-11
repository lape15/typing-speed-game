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
            if (word === splitSentence[index]) {
              opacity = "correct";
              empty.push(word);
            } else if (word.length !== splitSentence[index].length) {
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
              {empty.length} words spelt correctly in {30 - seconds}s
            </span>
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
