"use client";

import { useQuizContext } from "@/context";
import Image from "next/image";

const Flag = () => {
  const { flag, alt, flagOrCapital }: any = useQuizContext();

  return (
    <>
      {flagOrCapital !== 1 && (
        <div>
          <Image src={flag} alt={alt} width={84} height={54} className="flag" />
        </div>
      )}
    </>
  );
};

export default Flag;
