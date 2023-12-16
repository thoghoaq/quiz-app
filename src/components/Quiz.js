// src/components/Quiz.js
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Question questionNumber={currentQuestion} onAnswer={handleAnswer} />}
        />
        <Route
          path="/result"
          element={<Result score={score} totalQuestions={5} />}
        />
      </Routes>
    </Router>
  );
};

export default Quiz;
