import { companies } from "../constants";

export default function BigUsers() {
  return (
    <section className="w-full bg-green-950/75 flex justify-evenly items-center py-4 b">
      <h4 className="text-green-950/40 font-extrabold text-lg"> As seen on:</h4>
      <div className="flex items-center space-x-12">
        {companies.map((item: { name: string; src: string }) => (
          <img key={item.name} src={item.src} className="w-16" alt="" />
        ))}
      </div>
    </section>
  );
}
