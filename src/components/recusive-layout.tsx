"use client";
import React, { useState } from "react";

type SplitDirection = "vertical" | "horizontal" | null;

const RecursiveLayout = () => {
  return (
    <div className="w-[500px] h-[500px] mx-auto grid place-items-center">
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
          ? "flex-row border-none"
          : splitDirection === "horizontal"
          ? "flex-col border-none"
          : ""
      }`}
    >
      {splitDirection ? (
        <>
          <RecursiveBox />
          <RecursiveBox />
        </>
      ) : (
        <div className="flex items-center justify-center w-full gap-2">
          <button
            className="h-8 w-8 border border-zinc-200 text-sm font-medium"
            onClick={() => handleSplit("vertical")}
          >
            V
          </button>
          <button
            className="h-8 w-8 border border-zinc-200 text-sm font-medium"
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
