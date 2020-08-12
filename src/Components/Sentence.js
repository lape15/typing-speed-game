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
              {empty.length} words spelt correctly in {30 - seconds}s
            </span>
            {/* {empty.map((s, i) => {
              return <div key={i}>{s}</div>;
            })} */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RandomSentence;
