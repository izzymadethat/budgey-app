import { companies } from "../constants";

export default function BigUsers() {
  return (
    <section className="w-full bg-gradient-to-r from-green-950/75 to-green-600/75 flex flex-col lg:flex-row justify-evenly items-center py-4 shadow-lg">
      <h4 className="text-green-100/50 font-extrabold text-lg md:text-xl lg:text-2xl tracking-widest">
        {" "}
        Budge has been featured in:
      </h4>
      <div className="flex items-center space-x-12 mt-4 lg:mt-0">
        {companies.map((item: { name: string; src: string }) => (
          <img key={item.name} src={item.src} className="w-12 lg:w-16" alt="" />
        ))}
      </div>
    </section>
  );
}
