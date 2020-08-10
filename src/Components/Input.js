import React from "react";

const TextArea = ({ handleSentenceChange, handleSubmit, sentence }) => {
  return (
    <div className="form-filed">
      <label>
        Sentence
        <textarea value={sentence} onChange={handleSentenceChange} />
      </label>
      <button type="submit">Restart</button>
    </div>
  );
};

export default TextArea;
