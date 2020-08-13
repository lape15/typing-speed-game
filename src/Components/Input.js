import React from "react";

const TextArea = ({
  handleSentenceChange,
  setStartTimer,
  sentence,
  gameOver,
}) => {
  return (
    <div className="form-filed">
      <textarea
        value={sentence}
        onChange={handleSentenceChange}
        placeholder="Type sentence here"
        readOnly={gameOver}
        onKeyPress={(e) => {
          if (e.key) {
            setStartTimer(true);
          }
        }}
      />
    </div>
  );
};

export default TextArea;
