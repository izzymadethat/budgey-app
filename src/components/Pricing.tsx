export default function Pricing() {
  return (
    <section className="mt-10 lg:p-12">
      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold">Pricing</h2>
        <h3 className="text-lg text-neutral-800 italic">
          Should you pay for financial education?
        </h3>
      </div>

      <div className="flex space-x-6 lg:justify-center items-center">
        <img
          className="w-[350px]"
          src="/src/assets/images/pricing.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <p className="max-w-4xl lg:max-w-xl">
            Budge believes that financial literacy should be something that is
            accessible for everyone. Therefore, Budge is offering Budgey to you
            at his very best price:{" "}
            <span className="font-bold text-green-800 text-xl italic">
              FREE
            </span>
          </p>
          <a
            href="#"
            className="p-4 m-6 bg-green-950 text-white text-sm text-center rounded-full hover:bg-green-700"
          >
            Sign up for an account
          </a>
        </div>
      </div>
    </section>
  );
}
