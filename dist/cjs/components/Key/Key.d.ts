/// <reference types="react" />
interface KeyProps {
    keystroke: "⌘" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
}
declare const Key: ({ keystroke }: KeyProps) => JSX.Element;
export default Key;
