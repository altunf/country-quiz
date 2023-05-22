"use client";
import { poppins700 } from "@/styles/fonts";
import { useQuizContext } from "@/context";

const Question = () => {
  const { capital, flagOrCapital }: any = useQuizContext();

  const capitalQuestion = <div> {capital} is the capital of</div>;
  const flagQuestion = <div> Which country does this flag belong to?</div>;

  return (
    <div className={poppins700.className}>
      {flagOrCapital === 1 ? capitalQuestion : flagQuestion}
    </div>
  );
};

export default Question;
