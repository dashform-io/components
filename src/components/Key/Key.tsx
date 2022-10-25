import React, { useEffect, useState } from "react";

interface KeyProps {
  keystroke:
    | "⌘"
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";
}

const Key = ({ keystroke }: KeyProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`${
        clicked ? "mt-[3px] h-[24px]" : "h-[27px]"
      } max-w-fit bg-gray-100 flex justify-center rounded-[6px]`}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <div
        className={`h-[21px] bg-gray-60 flex items-center justify-center rounded font-semibold text-gray-100 mt-[1.5px] mx-[1.5px] px-2 select-none`}
      >
        {keystroke}
      </div>
    </div>
  );
};

export default Key;
