"use client";
import { createContext, useContext, useState, useEffect } from "react";

const QuizContext = createContext({});

export const QuizContextProvider = ({ children }: any) => {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");
  const [alt, setAlt] = useState("");
  const [flagOrCapital, setFlagOrCapital] = useState(1);
  const [options, setOptions] = useState();
  const [count, setCount] = useState(0);
  const [completeQuiz, setCompleteQuiz] = useState(0);

  const getCountry = async () => {
    let random = Math.floor(Math.random() * 250);
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const capitalName = data[random].capital[0];
    let countryName = data[random].name.common;

    setCountry(countryName);
    capitalName && setCapital(capitalName);
    setFlag(data[random].flags.svg);
    setAlt(data[random].flags.alt);
    setFlagOrCapital(Math.floor(Math.random() * 2));

    let countryNames = [countryName];

    for (let i = 0; i < 3; i++) {
      let randomOption: number = Math.floor(Math.random() * 250);
      countryNames.push(data[randomOption].name.common);
    }
    countryNames.sort();

    const countries: any = [
      {
        letter: "A",
        name: countryNames[0],
        status: 0,
      },
      {
        letter: "B",
        name: countryNames[1],
        status: 0,
      },
      {
        letter: "C",
        name: countryNames[2],
        status: 0,
      },
      {
        letter: "D",
        name: countryNames[3],
        status: 0,
      },
    ];

    setOptions(countries);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        country,
        capital,
        flag,
        alt,
        flagOrCapital,
        getCountry,
        options,
        count,
        setCount,
        completeQuiz,
        setCompleteQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
