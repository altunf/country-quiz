"use client";
import { useQuizContext } from "@/context";
import { useState } from "react";

import Flag from "../flag";
import NextButton from "../next-button";
import Option from "../option";
import Question from "../question";

import "./style.css";

const QuizCard = () => {
  const {
    flagOrCapital,
    options,
    getCountry,
    completeQuiz,
    setCompleteQuiz,
  }: any = useQuizContext();
  const [showNextButton, setShowNextButton] = useState(false);

  const handleNextButton = () => {
    getCountry();
    setShowNextButton(false);
    setCompleteQuiz(completeQuiz + 1);
  };

  return (
    <>
      <div className={flagOrCapital ? "card" : "card-flag"}>
        <div className="flag">
          <Flag />
        </div>
        <div>
          <div className="question">
            <Question />
          </div>
          <span>
            {options &&
              options.map((item: any, index: number) => (
                <div key={index} onClick={() => setShowNextButton(true)}>
                  <Option
                    item={item.name}
                    letter={item.letter}
                    status={item.status}
                  />
                </div>
              ))}
          </span>
        </div>
        {showNextButton && (
          <button className="next" onClick={handleNextButton}>
            <NextButton />
          </button>
        )}
      </div>
    </>
  );
};

export default QuizCard;
