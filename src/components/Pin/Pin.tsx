import React, { useEffect, useMemo, useRef, useState } from "react";
import PinItem from "./PinItem";

interface PinProps {
  length: number;
}

const Pin = ({ length }: PinProps) => {
  const [value, setValue] = useState(Array(length).fill(""));
  const inputRefs: React.RefObject<HTMLInputElement>[] = useMemo(
    () =>
      Array(length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (inputRefs[index + 1]) inputRefs[index + 1].current!.focus();
      console.log(inputRefs);
    };

  return (
    <div className="flex flex-row gap-2">
      {value.map((el, index) => (
        <PinItem
          key={index}
          innerRef={inputRefs[index]}
          value={value[index]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const nextValues = value.map((c, i) => {
              if (i === index) {
                return event.target.value;
              } else {
                return c;
              }
            });
            setValue(nextValues);
          }}
          onKeyDown={(e) => {
            if (Number.isInteger(e.key)) {
              const nextValues = value.map((c, i) => {
                if (i === index) {
                  return e.key;
                } else {
                  return c;
                }
              });

              setValue(nextValues);
              if (inputRefs[index + 1]) inputRefs[index + 1].current!.focus();
            } else if (e.key === "Backspace") {
              if (inputRefs[index].current !== null) {
                inputRefs[index].current!.value = "";
              }
              if (inputRefs[index - 1]) inputRefs[index - 1].current!.focus();
            }
          }}
        />
      ))}
    </div>
  );
};

export default Pin;

// what's a dj's favorite name
// dj cool
// eric
