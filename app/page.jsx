import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";

import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-space-black text-white overflow-x-hidden">
      <Hero />
      <Products />
      <ProblemSolution />
      <Features />

      <FinalCTA />

      <footer className="w-full py-6 text-center text-gray-500 text-sm border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Lunaris AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
