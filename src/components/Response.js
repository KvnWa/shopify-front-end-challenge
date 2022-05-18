import React from "react";


const Response = ({ prompt, response }) => {
  return (
    <div className="response-container">
      <div className="response-wrapper">
        <strong className="card-text">Prompt:</strong>
        <div>{prompt}</div>
        <strong className="card-text">Response:</strong>
        <div>{response}</div>
      </div>
    </div>
  );
};

export default Response;
