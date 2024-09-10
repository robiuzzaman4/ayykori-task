import Link from "next/link";
import React from "react";

const LINKS = [
  {
    label: "Recusive Partitioning",
    href: "/recursive-partitioning",
  },
  {
    label: "Alphabet Tile Interaction",
    href: "/alphabet-tile-interaction",
  },
];

const HomePage = () => {
  return (
    <section className="h-[calc(100vh-56px)] w-full grid place-items-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium tracking-tighter">Solutions:</h3>
        {LINKS.map(({ href, label }, i) => (
          <div key={i} className="flex items-center gap-2 text-xl font-medium tracking-tighter">
            <p>{i + 1}. </p>
            <Link
              href={href}
              className="underline underline-offset-[3px] decoration-zinc-500"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
