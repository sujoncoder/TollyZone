import AllServices from "./components/home/AllServices";

export default function Home() {
  return (
    <main className="h-screen px-2 sm:px-20">
      <h1 className="text-center font-semibold text-pink-500 text-4xl">
        Wellcome to ToolyZone
      </h1>
      <p className="text-center font-semibold text-xl text-purple-400 my-4">
        A digital service solution platform tools.
      </p>

      <div>
        <AllServices />
      </div>
    </main>
  );
}
