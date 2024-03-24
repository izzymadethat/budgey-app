import { testimonials } from "../constants";
import star from "../assets/star.svg";

export default function Testimonials() {
  return (
    <section className="py-12" id="testimonials">
      <h3 className="text-4xl text-center font-bold select-none">
        Testimonials from those who consider Budge their <br />
        <span className="text-green-500 font-extrabold underline text-6xl">
          Financial Friend.
        </span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map(
          (
            person: { name: string; feedback: string; rating: number },
            index: number
          ) => (
            <div
              className="bg-white min-h-64 rounded-lg p-8 flex  flex-col justify-between shadow-lg pointer-events-none select-none"
              key={index}
            >
              <p className=" text-neutral-700">{person.feedback}</p>

              <div className="flex justify-between items-center">
                <p className="font-bold">{person.name}</p>
                <div className="flex">
                  {Array.from({ length: person.rating }, (_, index) => {
                    return <img key={index} src={star} className="size-6" />;
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
