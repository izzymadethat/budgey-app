export default function Pricing() {
  return (
    <section className="w-full mt-10 lg:py-16 border-b" id="pricing">
      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-4xl lg:text-5xl font-extrabold">Pricing</h2>
        <h3 className="text-lg text-neutral-800 italic">
          Should you pay for financial education?
        </h3>
      </div>

      <div className="flex gap-6 lg:justify-center items-center mx-4 px-4">
        <img
          className="hidden md:inline-flex w-[350px]"
          src="/assets/images/pricing.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="max-w-4xl lg:max-w-xl space-y-4 flex flex-col items-center justify-center">
            <p>
              Budge believes that financial literacy should be something that is
              accessible for everyone. Therefore, Budge is offering Budgey to
              you at his very best price:
              <br />
            </p>
            <span className="font-bold text-green-600 tracking-widest text-5xl underline">
              FREE
            </span>
            <p>
              If you find value in the service however, you are more than
              welcome to contribute a fair amount to Budge!
            </p>
          </div>
          <a
            href="#"
            className="w-fit p-4 my-6 bg-green-600 text-white text-sm text-center rounded-md hover:bg-green-700 lg:w-full"
          >
            Sign up for an account
          </a>
        </div>
      </div>
    </section>
  );
}
