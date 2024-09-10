import React from "react";

interface TileBoxProps {
  alphabet: string;
  handleTileInteraction: (alphabet: string) => void;
}

const TileBox = ({ alphabet, handleTileInteraction }: TileBoxProps) => {
  return (
    <div
      onClick={() => handleTileInteraction(alphabet)}
      className="p-4 bg-white hover:bg-zinc-200 border border-zinc-200 aspect-square cursor-pointer flex items-center justify-center text-xl font-medium"
    >
      {alphabet}
    </div>
  );
};

export default TileBox;
