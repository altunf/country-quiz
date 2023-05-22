"use client";
import { useQuizContext } from "@/context";
import Image from "next/image";
import "./style.css";
import { poppins400, poppins600, poppins700 } from "@/styles/fonts";

export const ResultCard = () => {
  const { count, setCount, setCompleteQuiz }: any = useQuizContext();

  const handleTryButton = () => {
    setCompleteQuiz(0);
    setCount(0);
  };
  return (
    <div className="result-card">
      <div>
        <div className="winners">
          <Image src="/winners.svg" alt="result" width={238} height={129} />
        </div>
        <div className={`${poppins700.className} results`}>Results</div>
        <p className={`${poppins400.className} description`}>
          You got <strong className="correct-answers">{count}</strong> correct
          answers
        </p>
        <div className="try-again">
          <button
            className={`${poppins600.className} button`}
            onClick={handleTryButton}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
