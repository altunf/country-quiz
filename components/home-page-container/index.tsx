"use client";

import React from "react";
import QuizCard from "../card";
import Header from "../header";
import { ResultCard } from "../result";
import { useQuizContext } from "@/context";
import "./style.css";

const HomePage = () => {
  const { completeQuiz }: any = useQuizContext();

  return (
    <div className="main">
      <div>
        <div className="header-style">
          <Header />
        </div>
        {completeQuiz === 6 ? <ResultCard /> : <QuizCard />}
      </div>
    </div>
  );
};

export default HomePage;
