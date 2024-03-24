export default function Header() {
  return (
    <section>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <div className="max-w-3xl relative flex flex-col justify-center">
          <img
            src="/assets/images/budge.png"
            alt=""
            className="w-80 lg:absolute lg:left-[75%]  lg:bottom-14 -z-10"
          />
          <h1 className="text-5xl lg:text-7xl text-center font-bold">
            Meet{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-950 bg-clip-text text-transparent uppercase">
              Budge,
            </span>{" "}
            <br />
            Your new budget buddy!
          </h1>
          <p className="max-w-4xl text-neutral-700 mt-4 text-center">
            Budgy is a finance toolset and platform that allows you to track
            your spending, make purchasing decisions and save money your way.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-green-500 to-green-950 py-3 px-4 mx-3 rounded-md text-white"
          >
            Start for Free
          </a>
          <a href="#features" className="border py-3 px-4 mx-3 rounded-md">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
