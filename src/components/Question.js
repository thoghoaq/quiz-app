// src/components/Question.js
import React from "react";

const questions = [
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
];

const Question = ({ questionNumber, onAnswer }) => {
  const question = questions[questionNumber - 1];

  // Check if question is defined before rendering
  if (!question) {
    return (
      <div>
        <p>Quiz completed. Please navigate to see the result.</p>
      </div>
    );
  }

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === question.correctAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Question {questionNumber}</h2>
      <p className="text-gray-800">{question.question}</p>
      <ul className="list-disc ml-6">
        {question.options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:underline"
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
