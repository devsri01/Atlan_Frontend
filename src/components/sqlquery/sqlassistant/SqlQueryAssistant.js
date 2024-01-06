import React, { useState } from 'react';
import axios from 'axios';
import './SqlQueryAssistant.css'; 

const SqlQueryAssistant = () => {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    const handleGenerateResponse = async () => {
      try {
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
        const val = await axios.post(
          apiUrl,
          {
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: `generate a sql query for the following text ${inputText}` },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
          }
        );
  
        // Extract and set the generated response
        setResponse(val.data.choices[0].message.content);
      } catch (error) {
        console.error('Error generating response:', error);
      }
    };
  
    return (
      <div className='container'>
      <strong className="responseLabel">Use the below input Box to generate sql queries from chatGPT</strong>
        <div className="textareaContainer">
          <textarea
            placeholder="Type query in own words..."
            value={inputText}
            onChange={handleInputChange}
            className="textarea"
          />
        </div>
        <strong className="responseLabel">The text box functionality is currently inactive, due to the unavailability of a valid, paid API key. </strong>
        <button onClick={handleGenerateResponse} className="button">Generate Response</button>
        <div className="responseContainer">
          <strong className="responseLabel">Response:</strong>
          <p className="responseContent">{response}</p>
        </div>
      </div>
    );
}

export default SqlQueryAssistant;
