"use client";
import Image from "next/image";
import "./style.css";
import { poppins700 } from "@/styles/fonts";
import { useQuizContext } from "@/context";

const Header = () => {
  const { completeQuiz }: any = useQuizContext();
  return (
    <div className="header">
      <div className={`${poppins700.className} title`}>COUNTRY QUIZ</div>
      {completeQuiz < 6 && (
        <Image src="/adventure.svg" width={162} height={116} alt="adventure" />
      )}
    </div>
  );
};

export default Header;
