import React from "react";

const TextArea = ({
  handleSentenceChange,
  handleSubmit,
  sentence,
  gameOver,
}) => {
  return (
    <div className="form-filed">
      <label>
        Sentence
        <textarea
          value={sentence}
          onChange={handleSentenceChange}
          placeholder="Type sentence here"
          readOnly={gameOver}
        />
      </label>
      <button type="submit">Restart</button>
    </div>
  );
};

export default TextArea;
