import { CheckCircle2 } from "lucide-react";
import { features } from "../constants/index.js";

export default function Features() {
  return (
    <section className="mt-20" id="features">
      <h2 className="text-green-950 font-bold tracking-widest text-5xl text-center mb-8">
        Features
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex mr-4 space-x-4">
              <CheckCircle2 className="text-green-700 h-12 w-12" />
              <div className="w-full">
                <h1 className="text-lg font-extrabold">{feature.title}</h1>
                <p className="text-neutral-800">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
