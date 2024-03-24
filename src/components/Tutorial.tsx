import { Goal } from "lucide-react";
import { tutorial } from "../constants";

export default function Tutorial() {
  return (
    <section className="mt-20 p-8 flex flex-col items-center">
      <h3 className="text-2xl text-center font-bold underline">How it Works</h3>
      {tutorial.map((item, index) => (
        <div
          key={index}
          className="flex lg:justify-evenly items-center flex-shrink-0 space-x-2"
        >
          <Goal className="w-8 h-8 text-green-800" />
          <span className="text-lg text-neutral-950">{item.tip}</span>
        </div>
      ))}
    </section>
  );
}
