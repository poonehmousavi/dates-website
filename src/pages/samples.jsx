// AudioSamples.js

import React, { useState } from "react";
import { Link } from "react-router-dom";


const TOKENIZERS = {
  rec: {
    speech: ["Enc-SMA-24", "DAC-SMA-24", "ST-S-16"],
    audio: ["Enc-SMA-24", "DAC-SMA-24"],
    music: ["Enc-SMA-24", "SQ-SMA-16"],
  },
  lm: {
    speech: ["PROMPT","Enc-SMA-24", "DWavL-S-16"],
    audio: ["DAC-SMA-24", "WT-SMA-24"],
    music: ["WT-SMA-24", "Mimi-S-24"],
    tts: ["REFERENCE", "DWavL-S-16", "Enc-SMA-24", "DAC-SMA-24", "ST-S-16", "WT-SMA-24", "Mimi-SMA-24"]
  },
  abl: {
    speech: ["ST-S-16", "Mimi-S-24"],
    audio: ["DAC-SMA-24"],
    music: ["SQ-SMA-16", "WT-SMA-24"],
  }
};

const EXAMPLES = [
  { caption: "Sample 1", idx: 1 },
  { caption: "Sample 2", idx: 2 },
  { caption: "Sample 3", idx: 3 }
];

const ACCORDIONS = [
  { main: "Reconstruction", group: "rec", color: "blue" },
  { main: "Acoustic LM", group: "lm", color: "red" },
  { main: "Ablation", group: "abl", color: "green" }
];

// Icons for each subpanel
const SUBPARTS = [
  { key: "speech", label: "Speech", icon: "🗣️" },
  { key: "audio", label: "Audio", icon: "🔊" },
  { key: "music", label: "Music", icon: "🎵" }
];
// Acoustic LM gets TTS as well
const LM_SUBPARTS = [
  ...SUBPARTS,
  { key: "tts", label: "TTS", icon: "🗣️📝" }
];

// Color mapping for accordion headers (static for Tailwind JIT)
const colorMap = {
  blue:   { base: "bg-blue-100 text-blue-800",   active: "bg-blue-200 text-blue-900" },
  red:    { base: "bg-red-100 text-red-800",     active: "bg-red-200 text-red-900" },
  green:  { base: "bg-green-100 text-green-800", active: "bg-green-200 text-green-900" }
};

// Hidden div for Tailwind JIT
// eslint-disable-next-line
<div className="hidden">
  bg-blue-100 text-blue-800
  bg-blue-200 text-blue-900
  bg-red-100 text-red-800
  bg-red-200 text-red-900
  bg-green-100 text-green-800
  bg-green-200 text-green-900
</div>;

// Normalize group key to folder name
function normalizeGroup(group) {
  if (group === "rec") return "reconstruction";
  if (group === "lm") return "acousticlm";
  if (group === "abl") return "ablation";
  return group;
}

// Build audio URL
function audioUrl({ group, subpart, tokenizer, idx }) {
  let tn = tokenizer.replace(/-/g, "").replace(/ /g, "").toLowerCase();
  const folder = normalizeGroup(group);
  const base = import.meta.env.BASE_URL; // For Vite, supports subfolder deployment
  return `${base}samples/${folder}/${subpart}/${group}_${subpart}_${tn}_${idx}.wav`;
}

function AudioSampleGrid({ group, subpart, tokenizers }) {
  if (!tokenizers?.length)
    return <div className="text-gray-500 p-4">No samples yet for this task.</div>;
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full text-sm border border-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-1 text-left whitespace-nowrap">Tokenizer</th>
            {EXAMPLES.map(e => (
              <th
                key={e.idx}
                className="px-2 py-1 text-center whitespace-nowrap"
              >
                {e.caption}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tokenizers.map(tokenizer => (
            <tr key={tokenizer}>
              <td className="font-semibold px-2 py-1 whitespace-nowrap">{tokenizer}</td>
              {EXAMPLES.map(e => (
                <td key={e.idx} className="px-2 py-1 text-center align-middle">
                  <audio
                    controls
                    preload="none"
                    src={audioUrl({ group, subpart, tokenizer, idx: e.idx })}
                    className="w-36 mx-auto rounded shadow"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AudioSamples() {
  const [openMain, setOpenMain] = useState(null); // 0,1,2 or null
  const [openSub, setOpenSub] = useState({}); // { [mainIdx]: subIdx }

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Audio Samples Showcase
      </h2>
      <div className="space-y-6">
        {ACCORDIONS.map((acc, mainIdx) => (
          <div key={acc.main} className="border rounded-xl mb-2">
            {/* Accordion Header */}
            <button
              onClick={() => setOpenMain(openMain === mainIdx ? null : mainIdx)}
              className={`w-full text-left p-4 font-semibold text-lg select-none focus:outline-none ${
                openMain === mainIdx
                  ? colorMap[acc.color]?.active
                  : colorMap[acc.color]?.base
              }`}
              type="button"
              aria-expanded={openMain === mainIdx}
            >
              {acc.main}
            </button>
            {/* Accordion Body */}
            {openMain === mainIdx && (
              <div className="p-4 bg-white text-black">
                {(acc.group === "lm" ? LM_SUBPARTS : SUBPARTS).map((sub, subIdx) => (
                  <div key={sub.key} className="border rounded-lg my-2">
                    {/* Subpanel Header */}
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        setOpenSub(s => ({
                          ...s,
                          [mainIdx]: s[mainIdx] === subIdx ? null : subIdx
                        }));
                      }}
                      className={`w-full text-left p-2 font-medium text-base flex items-center gap-2 focus:outline-none ${
                        openSub[mainIdx] === subIdx
                          ? "bg-gray-200"
                          : "bg-gray-50"
                      }`}
                      type="button"
                      aria-expanded={openSub[mainIdx] === subIdx}
                    >
                      <span className="text-xl">{sub.icon}</span>
                      {sub.label}
                    </button>
                    {/* Subpanel Body */}
                    {openSub[mainIdx] === subIdx && (
                      <div className="p-2">
                        <AudioSampleGrid
                          group={acc.group}
                          subpart={sub.key}
                          tokenizers={TOKENIZERS[acc.group]?.[sub.key] || []}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center pt-8 space-y-4">
        <Link
          to="/benchmarks"
          className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
        >
          ⬅️ Back to Benchmark Overview
        </Link>
        <div className="text-base text-gray-700 max-w-3xl mx-auto text-left dark:text-white-900">
          <span className="text-xl mr-2">💡</span>
          For each group and tokenizer, listen to three distinct sample audios. Audio elements only load when you expand the relevant section.
        </div>
      </div>
    </div>
  );
}
