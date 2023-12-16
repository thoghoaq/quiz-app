import Question from "./Question";
import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';

const Package = ({ currentPackageNumber, questions, onAnswer, onNext, showResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const navigate = useNavigate();

  const handleNext = (currentQuestion, isCorrect) => {
    var isShowResult = onNext();
    if (isShowResult && isCorrect) {
      navigate("/result");
      return;
    }
    if (currentQuestion === questions.length) {
      setCurrentQuestion((_) => 1);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleAnswer = (isCorrect) => {
    var isShowResult = onNext();
    if (isShowResult) {
      navigate("/result");
      return;
    }
    if (isCorrect) {
      setCurrentQuestion((_) => 1);
    }
    onAnswer(isCorrect);
  }

  return (
    <div>
      <h2 className="text-2xl text-white font-bold p-4">Gói {currentPackageNumber}</h2>
      <Question
        questions={questions}
        questionNumber={currentQuestion}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        showResult={showResult}
      />
    </div>
  );
};

export default Package;
