// src/components/Question.js
import React, { useState } from "react";

const Question = ({ questions, questionNumber, onNext, onAnswer, showResult }) => {
  const question = questions[questionNumber - 1];
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Check if question is defined before rendering
  if (!question) {
    return (
      <div>
        <p>Quiz completed. Please navigate to see the result.</p>
      </div>
    );
  }

  const handleAnswerClick = (selectedOption) => {
    // Allow selecting an option only if not submitted
    if (!submitted) {
      setSelectedOption(selectedOption);
      if (selectedOption !== null) {
        const answerIsCorrect = selectedOption === question.correctAnswer;
        setSubmitted(true);
        setIsCorrect(answerIsCorrect);
      }
    }
  };

  const handleNextClick = () => {
    if (isCorrect) {
      onAnswer(isCorrect);
    } else {
      onNext(questionNumber, isCorrect);
    }
    // Reset selected option, submitted state, and correctness for the next question
    setSelectedOption(null);
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="lg:w-1/2 sm:w-11/12 mx-auto p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-left">
        Câu {questionNumber}
      </h2>
      <p className="text-xl text-left pb-6">{question.question}</p>
      {submitted ? (
        <p
          className={`my-4 text-left ${
            isCorrect ? "text-green-500" : "text-red-500"
          }`}
        >
          {isCorrect
            ? "Chính xác!"
            : `Sai rồi! Câu trả lời đúng là: ${question.correctAnswer}`}
        </p>
      ) : (
        <p className="my-4 text-left text-slate-500">
          Chọn 1 trong 4 đáp án sau đây
        </p>
      )}
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`${!submitted && "hover:underline cursor-pointer"}  p-2 border border-solid rounded-md text-left pl-5 ${
              selectedOption === option
                ? "border-slate-500" // Highlight selected option with blue border
                : "border-gray-300" // Default border color
            } ${
              selectedOption === option && submitted && !isCorrect
                ? "!border-red-500" // Highlight selected incorrect option with light blue background
                : ""
            }
            ${
              option === question.correctAnswer && submitted
                ? "bg-green-500"
                : ""
            } ${!submitted && "hover:border-slate-800"} `}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="flex mt-4 justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextClick}
        >
          {isCorrect ? showResult ? "Xem kết quả" : "Gói tiếp theo" : !submitted ? "Tiếp tục" : "Thử lại"}
        </button>
      </div>
    </div>
  );
};

export default Question;
