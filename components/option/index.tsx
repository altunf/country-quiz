"use client";
import { useQuizContext } from "@/context";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import "./style.css";
import { poppins500 } from "@/styles/fonts";

const Option = ({ item, letter, status }: any) => {
  const { country, options, count, setCount }: any = useQuizContext();

  const classSelector =
    status === 0 ? "inactive" : status === 1 ? "correct" : "false";
  const iconSelector =
    (status === 1 && <BsCheckCircle />) || (status === 2 && <BsXCircle />);

  const handleClick = ({ letter, item }: any) => {
    item === country && setCount(count + 1);

    options.filter((el: any) => {
      if (el.name === country) {
        return (el.status = 1);
      }
      if (letter == el.letter) {
        return (el.status = 2);
      }
    });
  };

  return (
    <>
      <span>
        <button
          className={`${poppins500} option ${classSelector}`}
          onClick={() => {
            handleClick({ letter, item });
          }}
        >
          <div className="letter-name">
            <div className="letter">{letter}</div>
            <div className="name">{item}</div>
          </div>

          <div className="icon">{iconSelector}</div>
        </button>
      </span>
    </>
  );
};

export default Option;
