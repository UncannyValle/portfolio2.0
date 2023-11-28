export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-6xl">{`<Julian Valle.dev />`}</h1>
      <h2 className="text-3xl">Loading...</h2>
      <div className="mt-8 animate-spin text-9xl">🍥</div>
    </div>
  );
}
