import PromptForm from "./components/PromptForm.js";
import Response from "./components/Response.js";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [responses, setResponses] = useState([]);


  useEffect(() => {
    const respData = localStorage.getItem("storedResponses");
    if (respData) {
      setResponses(JSON.parse(respData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storedResponses", JSON.stringify(responses));
  });

  return (
    <div className="container">
      <h1>Shopify Front End Developer Intern Challenge</h1>
      <div className="wrapper">
        <h3><strong>Fun With OpenAI</strong></h3>
        <h4>Enter a prompt to get started</h4>
        <PromptForm responses={responses} setResponses={setResponses}></PromptForm>
        <h2>Responses</h2>
        <ul>
          {responses.map((response, id) => (
            <li key={id}>
              <Response
                prompt={response.prompt}
                response={response.response}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
