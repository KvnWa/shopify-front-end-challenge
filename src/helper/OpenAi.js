const data = {
      temperature: 0.9,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
}

export const fetchAI = (prompt) => {
   return fetch("https://api.openai.com/v1/engines/text-curie-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`
      },
      body: JSON.stringify({...data, prompt })
    });
}