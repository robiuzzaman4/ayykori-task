import React from "react";
import { ALPHABETS } from "@/constants";
import TileBox from "@/components/tile-box";

const Tiles = () => {
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {ALPHABETS.map((alphabet, index) => (
        <TileBox key={index} alphabet={alphabet} />
      ))}
    </div>
  );
};

export default Tiles;
