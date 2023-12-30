"use client";

import Link from "next/link";

export const LandingHero = () => {

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 grid gap-10">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Read cutting-edge</h1>
        <h1>research, no matter who</h1>
        <h1>you are.</h1>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 w-7/12 m-auto">
        Dive deep into research with AI-powered summaries, interactive queries
        and a revolutionary knowledge graph structure, overhauling your
        understanding of complex topics.
      </div>
      <div>
        <Link href={"/create-graph"}>
          <button
            className="rounded-2xl bg-indigo-600 md:text-lg p-2 md:p-4 rounded-full font-semibold mr-4"
          >
            Create Custom Graph -&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};
