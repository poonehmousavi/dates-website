import React, { useState } from 'react';
import data from '../data/tokenizers.json';

const FILTERS = {
  "Encoder/Decoder": {
    Architecture: ['CNN', 'RNN', 'CNN+RNN', 'CNN+T', 'T'],
    Representation: ['Time', 'Time-Freq'],
  },
  Quantization: {
    Algorithm: ['RVQ', 'GVQ', 'SVQ', 'MSRVQ', 'CSRVQ', 'PQ', 'FSQ', 'K-Mean'],
    Offline: ['yes', 'no'],
    Bitrate: ['Fixed', 'Adaptive'],
  },
  Training: {
    Objective: ['GAN', 'Diff', 'MP', 'Feats', 'recon', 'VQ'],
    Auxiliary: ['Disentanglement', 'Semantic distillation', 'Supervised semantic'],
    Joint: ['yes', 'no'],
  },
  "Target Domain": {
    Target_Domain: ['speech', 'music', 'audio'],
  },
  Streamability: {
    Streamability: ['yes', 'no'],
  },
};

const MULTI_SELECT = ['Objective', 'Auxiliary', 'Target_Domain'];

const SECTION_COLORS = {
  "Encoder/Decoder": 'border-green-500 bg-green-50 dark:bg-green-100',
  Quantization: 'border-orange-400 bg-orange-50 dark:bg-orange-100',
  Training: 'border-yellow-400 bg-yellow-50 dark:bg-yellow-100',
  "Target Domain": 'border-gray-400 bg-gray-100 dark:bg-gray-200',
  Streamability: 'border-sky-400 bg-sky-50 dark:bg-sky-100',
};

export default function Taxonomy() {
  const [filters, setFilters] = useState({});
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleToggle = (subcat, value, isMulti) => {
    setFilters(prev => {
      if (isMulti) {
        const current = prev[subcat] || [];
        const updated = current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value];
        return { ...prev, [subcat]: updated };
      } else {
        return { ...prev, [subcat]: [value] };
      }
    });
  };

  const matchesAllFilters = tokenizer => {
    return Object.entries(filters).every(([key, values]) => {
      if (!values.length) return true;
      const jsonKey = key.toLowerCase();
      const field = tokenizer[jsonKey] || tokenizer[key] || [];
      if (Array.isArray(field)) return values.every(v => field.includes(v));
      return values.includes(field);
    });
  };

  const filtered = data.filter(matchesAllFilters);

  const exportCSV = () => {
    const headers = ['Name', 'Architecture', 'Representation', 'Algorithm', 'Objective', 'Target Domain', 'Streamability'];
    const rows = filtered.map(tok => [
      tok.name,
      tok.architecture,
      tok.representation,
      tok.algorithm,
      (tok.objective || []).join('; '),
      (tok.target_domain || []).join('; '),
      tok.streamability
    ]);
    const csv = [headers.join(','), ...rows.map(row => row.map(v => `"${v}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filtered_tokenizers.csv';
    a.click();
  };

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-primary text-center">Tokenizer Taxonomy</h2>


      <div className="flex justify-center">
      <img
  src="/dates-website/taxonomy.svg"
  alt="Taxonomy Diagram"
  className="w-full max-w-4xl rounded-lg shadow-lg bg-white p-4"
/>
      </div>

<details className="border-2 border-primary rounded-xl shadow bg-white">
  <summary className="px-6 py-4 text-lg font-bold text-primary cursor-pointer select-none">
  <div className="text-center text-3xl font-extrabold text-primary">
  <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-typing">
    Tell Me Your Task, and I Will Tell You Your Tokenizer 🔮
  </span>
</div>
  </summary>
  <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black p-6">
    {Object.entries(FILTERS).map(([section, subcats]) => (
      <fieldset
        key={section}
        className={`rounded-xl p-4 shadow border-2 ${SECTION_COLORS[section] || 'border-gray-300'}`}
      >
        <legend className="font-semibold text-lg mb-2">{section}</legend>
        {Object.entries(subcats).map(([subcat, values]) => (
          <div key={subcat} className="mb-4">
            <div className="font-medium text-sm text-accent mb-1">{subcat}</div>
            <div className="flex flex-wrap gap-2">
              {values.map(v => (
                <label key={v} className="flex items-center gap-1 text-sm">
                  <input
                    type={MULTI_SELECT.includes(subcat) ? 'checkbox' : 'radio'}
                    name={subcat}
                    checked={filters[subcat]?.includes(v) || false}
                    onChange={() => handleToggle(subcat, v, MULTI_SELECT.includes(subcat))}
                    className="accent-primary"
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
        ))}
      </fieldset>
    ))}
  </form>
</details>

      <div className="flex justify-end gap-4">
  <button
    onClick={() => setFilters({})}
    className="bg-gray-300 text-black px-4 py-2 rounded-full shadow hover:bg-gray-400 transition"
  >
    Clear All Filters
  </button>
  <button
    onClick={exportCSV}
    className="bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-secondary transition"
  >
    Export Filtered Results
  </button>
  
</div>
{Object.values(filters).some(v => v.length > 0) && (
  <div className="overflow-x-auto">
    <table className="w-full table-auto border border-gray-300 mt-6">
      <thead className="bg-gray-100 text-sm text-black">
        <tr>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Architecture</th>
          <th className="px-4 py-2 text-left">Representation</th>
          <th className="px-4 py-2 text-left">Algorithm</th>
          <th className="px-4 py-2 text-left">Offline</th>
          <th className="px-4 py-2 text-left">Bitrate</th>
          <th className="px-4 py-2 text-left">Objective</th>
          <th className="px-4 py-2 text-left">Auxiliary</th>
          <th className="px-4 py-2 text-left">Joint</th>
          <th className="px-4 py-2 text-left">Target Domain</th>
          <th className="px-4 py-2 text-left">Streamability</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(tok => (
          <tr key={tok.name} className="border-t text-sm">
            <td className="px-4 py-2 font-semibold text-primary">{tok.name}</td>
            <td className="px-4 py-2">{tok.architecture}</td>
            <td className="px-4 py-2">{tok.representation}</td>
            <td className="px-4 py-2">{tok.algorithm}</td>
            <td className="px-4 py-2">{tok.offline}</td>
            <td className="px-4 py-2">{tok.bitrate}</td>
            <td className="px-4 py-2">{tok.objective?.join(', ')}</td>
            <td className="px-4 py-2">{tok.auxiliary?.join(', ')}</td>
            <td className="px-4 py-2">{tok.joint}</td>
            <td className="px-4 py-2">{tok.target_domain?.join(', ')}</td>
            <td className="px-4 py-2">{tok.streamability}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
<div className="text-center mt-10">
  <p className="text-gray-700 mb-2">Want to contribute your tokenizer?</p>
  <a
    href="https://forms.gle/your-google-form-id"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-secondary transition"
  >
    ✍️ Submit a New Tokenizer
  </a>
</div>
    </div>
  );
  
}

