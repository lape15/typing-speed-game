import React from "react";

const TextArea = ({
  handleSentenceChange,
  handleSubmit,
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
      />
    </div>
  );
};

export default TextArea;
