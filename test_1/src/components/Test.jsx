import { useState } from "react";

export const Quiz = ({ question, options, answer }) => {
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = (option) => {
    setIsCorrect(option === answer);
  };

  return (
    <div className="quiz-container">
      <p>{question}</p>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
      {isCorrect === true && <p className="feedback correct">Correct!</p>}
      {isCorrect === false && <p className="feedback incorrect">Incorrect!</p>}
    </div>
  );
};
