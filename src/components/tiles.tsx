"use client";

import React, { useRef, useState } from "react";
import { ALPHABETS } from "@/constants";
import TileBox from "@/components/tile-box";

const Tiles = () => {
  // === output string state ===
  const [outputString, setOutputString] = useState("");

  // === output string reference ===
  const outputStringRef = useRef(null);

  // === handle tile interaction ===
  const handleTileInteraction = (alphabet: string) => {
    const newString = outputString + alphabet;
    const updatedString = updateString(newString);
    setOutputString(updatedString);
  };

  // === update output string to replace consecutive 3 characters by ("_") ===
  const updateString = (str: string) => {
    let result = "";
    let count = 1;
    const CONCAT_SYMBOL = "_";

    for (let index = 0; index < str?.length; index++) {
      const currentChar = str[index];
      const nextChar = str[index + 1];

      // if current character and next character are same then increment count value
      if (currentChar === nextChar) {
        count++;
      } else {
        const repetedCharStartIndex = index - count + 1;
        const repetedCharEndIndex = index + 1;

        // if count is 3 or more, then replace 3 count characters by "_" else return repeted characters
        if (count >= 3) {
          result += CONCAT_SYMBOL;
        } else {
          result += str?.slice(repetedCharStartIndex, repetedCharEndIndex);
        }

        // reset count value
        count = 1;
      }
    }

    return result;
  };

  return (
    <div className="grid gap-6">
      {outputString && (
        <div
          ref={outputStringRef}
          id="outputString"
          className="p-2 bg-zinc-100 border border-zinc-200 rounded text-base font-medium flex items-center justify-between gap-2"
        >
          Output: {outputString}
          <button onClick={() => setOutputString("")}>Reset</button>
        </div>
      )}
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {ALPHABETS.map((alphabet, index) => (
          <TileBox
            key={index}
            alphabet={alphabet}
            handleTileInteraction={handleTileInteraction}
          />
        ))}
      </div>
    </div>
  );
};

export default Tiles;
