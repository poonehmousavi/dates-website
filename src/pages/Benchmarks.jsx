import React from 'react';
import tokenizers from '../data/tokenizers_benchmark.json';
import { Link } from 'react-router-dom';

export default function Benchmarks() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-primary text-center">Benchmark Overview</h2>

      <p className="text-center text-light dark:text-black max-w-3xl mx-auto">
      We perform a joint evaluation across multiple dimensions considering a diverse set of publicly available, pre-trained tokenizers across speech, music, and general audio tasks.
      </p>


<div className="flex justify-center">
  <img
    src="/dates-website/benchmark.png"
    alt="Benchmark Design"
    className="w-full max-w-2xl rounded-xl shadow-lg bg-white p-4"
  />
</div>

<div className="flex flex-wrap justify-center gap-4 mt-6">
  <Link
    to="/benchmarks/reconstruction"
    className="w-[350px] text-center bg-blue-500 text-white p-4 rounded-xl shadow hover:bg-blue-600 transition"
  >
     Reconstruction
  </Link>

  <Link
    to="/benchmarks/downstream"
    className="w-[350px] text-center bg-purple-500 text-white p-4 rounded-xl shadow hover:bg-purple-600 transition"
  >
     Downstream
  </Link>

  <Link
    to="/benchmarks/acousticlm"
    className="w-[350px] text-center bg-red-500 text-white p-4 rounded-xl shadow hover:bg-red-600 transition"
  >
     Acoustic LM
  </Link>

  <Link
    to="/benchmarks/ablation"
    className="w-[350px] text-center bg-green-500 text-white p-4 rounded-xl shadow hover:bg-green-600 transition"
  >
     Ablation Study
  </Link>
</div>

      <div className="bg-white text-black shadow rounded-xl p-4 overflow-x-auto">
        <p className="mb-2 font-semibold text-lg text-primary">
          Audio Tokenizers Used in the Benchmark
        </p>
        <table className="min-w-full table-auto border border-gray-300 text-sm mt-6">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="px-4 py-2 text-left">Tokenizer</th>
              <th className="px-4 py-2 text-left">Abbr</th>
              <th className="px-4 py-2 text-left">Speech</th>
              <th className="px-4 py-2 text-left">Music</th>
              <th className="px-4 py-2 text-left">Audio</th>
              <th className="px-4 py-2 text-left">SR (kHz)</th>
              <th className="px-4 py-2 text-left">Frame</th>
              <th className="px-4 py-2 text-left">#Codes</th>
              <th className="px-4 py-2 text-left">Params (M)</th>
              <th className="px-4 py-2 text-left">MACs (G)</th>
              <th className="px-4 py-2 text-left">Link</th>
            </tr>
          </thead>
          <tbody>
            {tokenizers.map(tok => (
              <tr key={tok.abbr} className="border-t">
                <td className="px-4 py-2 font-semibold text-primary">{tok.name}</td>
                <td className="px-4 py-2">{tok.abbr}</td>
                <td className="px-4 py-2">{tok.speech ? '✔️' : ''}</td>
                <td className="px-4 py-2">{tok.music ? '✔️' : ''}</td>
                <td className="px-4 py-2">{tok.audio ? '✔️' : ''}</td>
                <td className="px-4 py-2">{tok.sr}</td>
                <td className="px-4 py-2">{tok.frame}</td>
                <td className="px-4 py-2">{tok.codes}</td>
                <td className="px-4 py-2">{tok.params}</td>
                <td className="px-4 py-2">{tok.macs}</td>
                <td className="px-4 py-2">
                  <a
                    href={tok.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
}
