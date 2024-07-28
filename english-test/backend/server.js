const express = require('express');
const cors = require('cors');
const app = express();

const questions = {
  A1: [
    { id: 1, question: "She ___ a teacher. (is/are)", options: ["is", "are"], correct: "is" },
    { id: 2, question: "I ___ to the store. (go/goes)", options: ["go", "goes"], correct: "go" },
    { id: 3, question: "I have ___ apple. (a/an)", options: ["a", "an"], correct: "an" },
    { id: 4, question: "They ___ playing soccer. (is/are)", options: ["is", "are"], correct: "are" },
    { id: 5, question: "He ___ at home. (am/is)", options: ["am", "is"], correct: "is" }
  ],
  // Add more questions for other levels (A2 to C1)
};

app.use(cors());
app.use(express.json());

app.get('/api/questions', (req, res) => {
  const level = req.query.level;
  res.json(questions[level]);
});

app.post('/api/submit', (req, res) => {
  const { level, answers } = req.body;
  // Evaluate answers and store results
  res.send('Test submitted!');
});

app.listen(5000, () => console.log('Server running on port 5000'));
