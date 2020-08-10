import React from "react";

const RandomSentence = ({
  randomSentence,
  splitRandomSentence,
  splitSentence,
}) => {
  return (
    <div className="sentence">
      {splitRandomSentence.map((word, index) => {
        console.log(word);
        console.log(splitSentence[index]);
        let color;
        if (index < splitSentence.length) {
          color = word === splitSentence[index] ? "green" : "red";
        }
        return (
          <span key={index} style={{ backgroundColor: color }}>
            {word + " "}
          </span>
        );
      })}
    </div>
  );
};

export default RandomSentence;
