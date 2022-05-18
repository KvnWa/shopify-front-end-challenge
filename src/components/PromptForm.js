import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchAI } from '../helper/OpenAi' 


const PromptForm = ({ responses, setResponses }) => {
  const [ prompt, setPrompt ] = useState("");
  const inputReference = useRef(null)


  //posts to api on submit and stores the response
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(prompt.length < 4){
      alert("Please enter at least 4 characters")
    } 

    const response = await fetchAI(prompt)
    const apiResponse = await response.json();

    setResponses([
      { id: apiResponse.id, prompt: prompt, response: apiResponse.choices[0].text },
      ...responses]);
    setPrompt("")

  };

  //autofocus on text area on render and on each submission
  useEffect(() => {
    inputReference.current.focus();
  }, [handleSubmit]);

 
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} >
        <textarea
          type="text"
          className="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          cols="90"
          rows="12"
          placeholder="Please enter your prompt here of at least 4 characters"
          ref={inputReference}
        />
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
