import RecursiveLayout from "@/components/recusive-layout";
import React from "react";

const RecursivePartitioningPage = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 py-16 grid gap-16">
      <h1 className="text-3xl font-normal tracking-tighter">
        Recursive Partitioning:
      </h1>
      {/* <RecursiveLayout /> */}
      <RecursiveLayout />
    </section>
  );
};

export default RecursivePartitioningPage;
