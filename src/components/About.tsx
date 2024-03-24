export default function About() {
  return (
    <div className="flex justify-between items-center mt-20 p-12">
      <div className="max-w-3xl">
        <h2 className="text-4xl mb-4">Budge doesn&apos;t Judge</h2>
        <p className="max-w-xl">
          Most people think that money is a logic structure, but Budge KNOWS
          that money is more about how you FEELS. It&apos;s easy to plan out
          your money on paper, but it doesn&apos;t stop you from not really
          wanting that thing you saw in the store. Therefore, if you get off
          track from your goals, just redirect as soon as you can. It&apos;s a
          marathon, not a sprint...
        </p>
      </div>
      <div className="container max-w-md rounded-lg  shadow-md  flex justify-end">
        <img src="/src/assets/images/money.jpg" alt="" />
      </div>
    </div>
  );
}
