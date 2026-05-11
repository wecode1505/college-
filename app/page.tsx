import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// We will uncomment these as we build them!
// import About from "./components/About";
// import Courses from "./components/Courses";
// import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-white overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}