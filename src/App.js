import { useState } from "react";
import "./styles.css";

const QuizApp = () => {
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];
  const [que, setQue] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const nextQueHandler = () => {
    if (answer === questions[que].correctAnswer) {
      setScore(score + 1);
    }

    if (que < questions.length - 1) {
      setQue(que + 1);
      setAnswer("");
    } else {
      setComplete(true);
    }
  };
  if (complete) {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>
          Your Score: {score}/{questions.length}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>Question {questions[que].id}</h2>
      <p>{questions[que].question}</p>

      {questions[que].options.map((option) => (
        <div key={option}>
          <label htmlFor="answer">
            <input
              name="answer"
              id="answer"
              type="radio"
              value={option}
              checked={answer === option}
              onChange={(event) => setAnswer(event.target.value)}
            />
            {option}
          </label>
          <br />
          <br />
        </div>
      ))}
      <button onClick={nextQueHandler}>Next</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}
