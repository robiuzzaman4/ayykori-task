import Tiles from "@/components/tiles";
import React from "react";

const AlphabetTileInteractionPage = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 py-16 grid gap-16">
      <h1 className="text-3xl font-normal tracking-tighter">
        Alphabet Tile Interaction:
      </h1>
      <Tiles />
    </section>
  );
};

export default AlphabetTileInteractionPage;
