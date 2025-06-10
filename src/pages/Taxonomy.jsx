import React, { useState } from 'react';
import data from '../data/tokenizers.json';

const AUX_MAP = {
  'Disentanglement': 'Dis',
  'Semantic distillation': 'SD',
  'Supervised semantic': 'SST',
};

const FILTERS = {
  "Encoder/Decoder": {
    Architecture: ['CNN', 'RNN', 'CNN+RNN', 'CNN+T', 'T'],
    Representation: ['Time', 'Time-Freq'],
  },
  Quantization: {
    Algorithm: ['RVQ', 'GVQ', 'SVQ', 'MSRVQ', 'CSRVQ', 'PQ', 'FSQ', 'K-Means'],
    Bitrate: ['Fixed', 'Adaptive'],
  },
  Training: {
    Objective: ['GAN', 'Diff', 'MP', 'Feat', 'Rec', 'VQ'],
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
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

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
      let field;
      switch (key) {
        case 'Architecture':
          field = tokenizer.encoder_decoder?.architecture?.encoder;
          break;
        case 'Representation':
          field = tokenizer.encoder_decoder?.rep === 'T' ? 'Time' : 'Time-Freq';
          break;
        case 'Algorithm':
          field = tokenizer.quantization?.tech;
          break;
        case 'Bitrate':
          field = tokenizer.quantization?.bit === 'F' ? 'Fixed' : 'Adaptive';
          break;
        case 'Objective':
          field = tokenizer.training?.objective?.split(', ').map(s => s.trim()) || [];
          break;
        case 'Auxiliary':
          field = tokenizer.training?.aux?.split(',').map(a => a.trim()) || [];
          const mapped = values.map(v => AUX_MAP[v]);
          return mapped.every(v => field.includes(v));
        case 'Joint':
          field = tokenizer.training?.joint ? 'yes' : 'no';
          break;
        case 'Target_Domain':
          field = Object.entries(tokenizer.domain || {})
            .filter(([_, v]) => v)
            .map(([k]) => k);
          break;
        case 'Streamability':
          field = tokenizer.stream ? 'yes' : 'no';
          break;
        default:
          return true;
      }
      if (Array.isArray(field)) return values.every(v => field.includes(v));
      return values.includes(field);
    });
  };

  const filtered = [...data.filter(matchesAllFilters)];

  if (sortColumn) {
    filtered.sort((a, b) => {
      const getVal = tok => {
        switch (sortColumn) {
          case 'Name': return tok.tokenizer;
          case 'Architecture': return tok.encoder_decoder?.architecture?.encoder || '';
          case 'Representation': return tok.encoder_decoder?.rep === 'T' ? 'Time' : 'Time-Freq';
          case 'Algorithm': return tok.quantization?.tech || '';
          case 'Bitrate': return tok.quantization?.bit === 'F' ? 'Fixed' : 'Adaptive';
          case 'Objective': return tok.training?.objective || '';
          case 'Auxiliary': return tok.training?.aux || '';
          case 'Joint': return tok.training?.joint ? 'yes' : 'no';
          case 'Target Domain': return Object.entries(tok.domain || {}).filter(([_, v]) => v).map(([k]) => k).join(', ');
          case 'Streamability': return tok.stream ? 'yes' : 'no';
          default: return '';
        }
      };
      const valA = getVal(a).toString().toLowerCase();
      const valB = getVal(b).toString().toLowerCase();
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = col => {
    if (sortColumn === col) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(col);
      setSortDirection('asc');
    }
  };

  const renderHeader = col => (
    <th
      className="px-4 py-2 text-left cursor-pointer select-none"
      onClick={() => handleSort(col)}
    >
      {col}
      {sortColumn === col && (
        <span className="ml-1 text-xs">{sortDirection === 'asc' ? '▲' : '▼'}</span>
      )}
    </th>
  );

  return (
    <div className="space-y-10">
   <h2 className="text-4xl font-bold text-primary text-center">Tokenizer Taxonomy</h2>

{/* Figure */}
<div className="flex justify-center">
  <img
    src="/dates-website/taxonomy.svg"
    alt="Taxonomy Diagram"
    className="w-full max-w-4xl rounded-lg shadow-lg bg-white p-4"
  />
</div>

{/* Clickable Box Link */}
<div className="flex justify-center">
  <a
    href="https://dates-tokens.github.io/taxonomy_interactive.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-yellow-100 hover:bg-yellow-200 text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md transition"
  >
    🔍 Explore the Interactive Taxonomy
  </a>
</div>

      {/* Collapsible filter section */}
      <details className="border-2 border-primary rounded-xl shadow bg-white">
        <summary className="px-6 py-4 text-lg font-bold text-primary cursor-pointer select-none">
          <div className="text-center text-3xl font-extrabold text-primary">
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-typing">
            Pick Your Traits, I’ll Reveal the Tokenizer  🔮
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

      {/* Control Buttons */}
      <div className="flex justify-end gap-4 px-6">
        <button onClick={() => setFilters({})} className="bg-gray-300 text-black px-4 py-2 rounded-full shadow hover:bg-gray-400 transition">
          Clear All Filters
        </button>
        <button
          onClick={() => {
            const headers = ['Name', 'Architecture', 'Representation', 'Algorithm', 'Bitrate', 'Objective', 'Auxiliary', 'Joint', 'Target Domain', 'Streamability'];
            const rows = filtered.map(tok => [
              tok.tokenizer,
              tok.encoder_decoder?.architecture?.encoder,
              tok.encoder_decoder?.rep === 'T' ? 'Time' : 'Time-Freq',
              tok.quantization?.tech,
              tok.quantization?.bit === 'F' ? 'Fixed' : 'Adaptive',
              tok.training?.objective,
              tok.training?.aux,
              tok.training?.joint ? 'yes' : 'no',
              Object.entries(tok.domain || {}).filter(([_, v]) => v).map(([k]) => k).join(', '),
              tok.stream ? 'yes' : 'no',
            ]);
            const csv = [headers.join(','), ...rows.map(r => r.map(cell => `"${cell}"`).join(','))].join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'filtered_tokenizers.csv';
            a.click();
          }}
          className="bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-secondary transition"
        >
          Export Filtered Results
        </button>
      </div>

      {/* Table */}
      {filtered.length > 0 && (
        <div className="overflow-x-auto max-h-[700px] overflow-y-scroll">
          <table className="w-full table-auto border border-gray-300 mt-6">
            <thead className="bg-gray-100 text-sm text-black sticky top-0 z-10">
              <tr>
                {['Name', 'Architecture', 'Representation', 'Algorithm', 'Bitrate', 'Objective', 'Auxiliary', 'Joint', 'Target Domain', 'Streamability'].map(renderHeader)}
              </tr>
            </thead>
            <tbody>
              {filtered.map(tok => (
                <tr key={tok.tokenizer} className="border-t text-sm">
                  <td className="px-4 py-2 font-semibold text-primary">{tok.tokenizer}</td>
                  <td className="px-4 py-2">{tok.encoder_decoder?.architecture?.encoder}</td>
                  <td className="px-4 py-2">{tok.encoder_decoder?.rep === 'T' ? 'Time' : 'Time-Freq'}</td>
                  <td className="px-4 py-2">{tok.quantization?.tech}</td>
                  <td className="px-4 py-2">{tok.quantization?.bit === 'F' ? 'Fixed' : 'Adaptive'}</td>
                  <td className="px-4 py-2">{tok.training?.objective}</td>
                  <td className="px-4 py-2">{tok.training?.aux}</td>
                  <td className="px-4 py-2">{tok.training?.joint ? 'yes' : 'no'}</td>
                  <td className="px-4 py-2">
                    {Object.entries(tok.domain || {})
                      .filter(([_, v]) => v)
                      .map(([k]) => k)
                      .join(', ')}
                  </td>
                  <td className="px-4 py-2">{tok.stream ? 'yes' : 'no'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Submit Tokenizer CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-700 mb-2">Want to contribute your tokenizer?</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSevtcbtML_SdyreWZJUPlnnGMpycjHFLkYabeswnOlu-cI2AQ/viewform?usp=header"
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
