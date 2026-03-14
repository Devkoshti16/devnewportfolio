import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/30 selection:text-white">
      {/* 
        ScrollyCanvas handles the 500vh scroll space,
        sticky canvas, and Parallax Overlay internally.
      */}
      <ScrollyCanvas />

      {/* 
        Projects grid sits below the 500vh scroll space,
        appearing after the animation finishes.
      */}
      <Projects />
    </main>
  );
}
