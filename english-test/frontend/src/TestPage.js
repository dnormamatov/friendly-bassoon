import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestPage({ level }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/questions?level=${level}`)
      .then(response => setQuestions(response.data))
      .catch(error => console.error(error));
  }, [level]);

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/submit', { level, answers })
      .then(response => alert('Test submitted!'))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Level {level} Test</h2>
      {questions.map(q => (
        <div key={q.id} className="question">
          <p>{q.question}</p>
          {q.options.map(option => (
            <label key={option}>
              <input type="radio" name={`question-${q.id}`} value={option} onChange={() => handleChange(q.id, option)} />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TestPage;
