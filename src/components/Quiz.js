// src/components/Quiz.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Result from "./Result";
import Package from "./Package";

const quiz = [
  {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale",
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        correctAnswer: "William Shakespeare",
      },
      {
        question:
          "Which programming language is known for its flexibility and ease of use?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: "Python",
      },
    ],
  },
  // Add more sets of questions if needed
  {
    questions: [
      {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Berlin",
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctAnswer: "Mercury",
      },
      {
        question: "What is the smallest prime number?",
        options: ["Zero", "One", "Two", "Three"],
        correctAnswer: "Two",
      },
      {
        question: 'Who wrote "Hamlet"?',
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        correctAnswer: "William Shakespeare",
      },
      {
        question: "Which programming language is known for web development?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: "JavaScript",
      },
    ],
  },
  // Add more sets of questions if needed
  // ...
];

const Quiz = () => {
  const [currentPackage, setCurrentPackage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCurrentPackage((prevPackage) => prevPackage + 1);
    }
  };

  const handleNextPackage = () => {
    if (currentPackage === quiz.length - 1) {
      setShowResult((_) => true);
      return true;
    }
    return false;
  };

  const reset = () => {
    setCurrentPackage((_) => 0);
    setShowResult((_) => false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Package
            currentPackageNumber={currentPackage + 1}
            questions={
              currentPackage > quiz.length - 1
                ? []
                : quiz[currentPackage].questions
            }
            onAnswer={handleAnswer}
            onNext={handleNextPackage}
            showResult={showResult}
          />
        }
      />
      <Route path="/result" element={<Result onReset={reset} />} />
    </Routes>
  );
};

export default Quiz;
