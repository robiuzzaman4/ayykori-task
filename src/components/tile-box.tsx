import React from "react";

interface TileBoxProps {
  alphabet: string;
}

const TileBox = ({ alphabet }: TileBoxProps) => {
  return (
    <div className="p-4 bg-white hover:bg-zinc-200 border border-zinc-200 aspect-square cursor-pointer flex items-center justify-center text-xl font-medium">
      {alphabet}
    </div>
  );
};

export default TileBox;
