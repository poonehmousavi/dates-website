import React, { useState, useEffect ,useLayoutEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Taxonomy from './pages/Taxonomy';
import Benchmarks from './pages/Benchmarks';
import Placeholder from './components/Placeholder';
import ReconstructionBenchmarks from './pages/ReconstructionBenchmarks';
import DownstreamBenchmarks from './pages/DownstreamBenchmarks';
import AcousticLMBenchmarks from './pages/AcousticLMBenchmarks';
import AblationStudy from './pages/Ablation';
import Team from './pages/Team';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter basename="/dates-website">
      <div className="min-h-screen font-sans bg-background text-light dark:bg-white dark:text-black transition-colors duration-300">
        <header className="p-6 bg-gradient-to-r from-primary via-secondary to-accent shadow-xl">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center">
                <img src="/dates-website/DATES_Logo.png" alt="DATES Logo" className="w-16 h-16 rounded-full" />
              </Link>
              <h1 className="text-3xl font-bold tracking-wide">Discrete Audio Tokens Empirical Study</h1>
            </div>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/taxonomy" className="hover:underline">Taxonomy</Link>
              <Link to="/benchmarks" className="hover:underline">Benchmarks</Link>
              {/* <Link to="/ablation" className="hover:underline">Ablation</Link> */}
              <Link to="/team" className="hover:underline">Team</Link>
              <a
  href="https://arxiv.org/abs/your-paper-id" // replace with actual paper link
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
📄 Paper
</a>

            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-black bg-black/20 dark:bg-white/20 text-white dark:text-black hover:scale-110 transition-transform duration-300"
              title="Toggle Theme"
            >
              <span className="text-xl">{darkMode ? '🌞' : '🌙'}</span>
            </button>
          </div>
        </header>

        <main className="p-6 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taxonomy" element={<Taxonomy />} />
            <Route path="/benchmarks" element={<Benchmarks />} />
            <Route path="/benchmarks/ablation" element={<AblationStudy />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<Placeholder name="404: Not Found" />} />
            <Route path="/benchmarks/reconstruction" element={<ReconstructionBenchmarks />} />
            <Route path="/benchmarks/Downstream" element={<DownstreamBenchmarks />} />
            <Route path="/benchmarks/acousticlm" element={<AcousticLMBenchmarks />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
