import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className="text-center font-semibold my-20 text-cyan-300 text-4xl">
        Hello developers
      </h1>
      <Footer />
    </main>
  );
}
