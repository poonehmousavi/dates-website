import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 text-center">
      {/* Logo + Title */}
      <div className="space-y-4">
        <img
          src="/dates-website/DATES_Logo.png"
          alt="DATES Logo"
          className="w-48 h-48 mx-auto drop-shadow-xl transition-transform hover:scale-105"
        />
        <h1 className="text-4xl font-extrabold text-primary">
         Discrete Audio Tokens Empirical Study
        </h1>
        <p className="text-light text-lg max-w-xl mx-auto">
          A unified survey and benchmark to explore reconstruction, downstream tasks,
          and language modeling with discrete audio tokens.
        </p>
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card
          title="Taxonomy"
          color="from-purple-500 to-pink-500"
          onClick={() => navigate('/taxonomy')}
        />
        <Card
          title="Benchmarking"
          color="from-blue-500 to-cyan-500"
          onClick={() => navigate('/benchmarks')}
        />
        <Card
          title="Ablation Study"
          color="from-indigo-500 to-violet-500"
          onClick={() => navigate('/ablation')}
        />
      </div>

      {/* Paper Button */}
      <div className="mt-10">
        <a
          href="https://arxiv.org/abs/XXXX.XXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg hover:scale-105 transition-transform"
        >
          📄 Read the Paper
        </a>
      </div>
    </div>
  );
}
