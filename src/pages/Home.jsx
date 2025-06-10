// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Card from '../components/Card';

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-12 text-center">
//       {/* Logo + Title */}
//       <div className="space-y-4">
//         <img
//           src="/dates-website/DATES_Logo.png"
//           alt="DATES Logo"
//           className="w-48 h-48 mx-auto drop-shadow-xl transition-transform hover:scale-105"
//         />
//         <h1 className="text-4xl font-extrabold text-primary">
//          Discrete Audio Tokens Empirical Study
//         </h1>
//         <p className="text-light text-lg max-w-xl mx-auto">
//           A unified survey and benchmark to explore reconstruction, downstream tasks,
//           and language modeling with discrete audio tokens.
//         </p>
//       </div>

//       {/* Interactive Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         <Card
//           title="Taxonomy"
//           color="from-purple-500 to-pink-500"
//           onClick={() => navigate('/taxonomy')}
//         />
//         <Card
//           title="Benchmarking"
//           color="from-blue-500 to-cyan-500"
//           onClick={() => navigate('/benchmarks')}
//         />
//         <Card
//           title="Ablation Study"
//           color="from-indigo-500 to-violet-500"
//           onClick={() => navigate('/benchmarks/ablation')}
//         />
//       </div>

//       {/* Paper Button */}
//       <div className="mt-10">
//         <a
//           href="https://arxiv.org/abs/XXXX.XXXXX"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg hover:scale-105 transition-transform"
//         >
//           📄 Read the Paper
//         </a>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const bibtex = `@misc{dates,
  title=Discrete Audio Tokens: More Than a Survey!,
  author=,
  year={2025},
  eprint={TBA},
  archivePrefix={arXiv},
  primaryClass={TBA},
  note={TBA}
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
        <p className="text-light dark:text-black max-w-3xl mx-auto">
  A unified survey and benchmark to explore reconstruction, downstream tasks,
  and language modeling with discrete audio tokens.
</p>

{/* <p className="text-center text-light dark:text-black max-w-3xl mx-auto">
      We perform a joint evaluation across multiple dimensions considering a diverse set of publicly available, pre-trained tokenizers across speech, music, and general audio tasks.
      </p> */}





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
          onClick={() => navigate('/benchmarks/ablation')}
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

      {/* Reference Section */}
      <div className="mt-16 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-center text-primary mb-2">📖 Reference</h2>
        {/* <p className="mb-3 text-sm">
          If you use this project or its benchmarks, please consider citing:
        </p> */}

        <div className="relative">
          <pre className="bg-gray-100 dark:bg-gray-200 text-sm text-black font-mono p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
            {bibtex}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-primary text-white text-xs px-3 py-1 rounded hover:bg-secondary transition"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
