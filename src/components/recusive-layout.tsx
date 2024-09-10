"use client";
import React, { useState } from "react";

type SplitDirection = "vertical" | "horizontal" | null;

const RecursiveLayout = () => {
  return (
    <div className="w-[400px] h-[400px] mx-auto grid place-items-center">
      <RecursiveBox />
    </div>
  );
};

const RecursiveBox = () => {
  const [splitDirection, setSplitDirection] = useState<SplitDirection>(null);

  const handleSplit = (direction: SplitDirection) => {
    setSplitDirection(direction);
  };

  return (
    <div
      className={`w-full h-full flex border border-zinc-200 ${
        splitDirection === "vertical"
          ? "flex-row border-none border-y"
          : splitDirection === "horizontal"
          ? "flex-col border-none border-x"
          : ""
      }`}
    >
      {splitDirection ? (
        <>
          <RecursiveBox />
          <RecursiveBox />
        </>
      ) : (
        <div className="flex space-x-3 m-auto">
          <button
            className="h-8 w-8 border border-zinc-200"
            onClick={() => handleSplit("vertical")}
          >
            V
          </button>
          <button
            className="h-8 w-8 border border-zinc-200"
            onClick={() => handleSplit("horizontal")}
          >
            H
          </button>
        </div>
      )}
    </div>
  );
};

export default RecursiveLayout;
