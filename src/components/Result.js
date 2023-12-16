// src/components/Result.js
import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
      <Link to="/">Take the quiz again</Link>
    </div>
  );
};

export default Result;
