import React from 'react';
import { Link } from 'react-router-dom';

export default function AblationStudy() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-primary text-center">🧪 Ablation Study</h2>

      {/* Summary Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-xl shadow border text-black">
  <p className="text-lg font-semibold text-primary mb-2">
    📋 Model Variants in Ablation Study (16kHz & 44.1kHz)
  </p>
  <table className="table-auto min-w-full border border-gray-300 text-sm text-center text-black">
    <thead className="bg-gray-100 text-black">
      <tr>
        <th className="px-2 py-1">Model</th>
        <th>Base</th>
        <th>Quantization</th>
        <th>Distillation</th>
        <th>Speech</th>
        <th>Audio</th>
        <th>Music</th>
      </tr>
    </thead>
    <tbody>
      {/* RVQ Group */}
      <tr><td>RVQ-S</td><td rowSpan="5">DAC</td><td rowSpan="5">RVQ</td><td>-</td><td>✔️</td><td></td><td></td></tr>
      <tr><td>RVQ-S+</td><td>✔️</td><td>✔️</td><td></td><td></td></tr>
      <tr><td>RVQ-A</td><td>-</td><td></td><td>✔️</td><td></td></tr>
      <tr><td>RVQ-M</td><td>-</td><td></td><td></td><td>✔️</td></tr>
      <tr><td>RVQ-3</td><td>-</td><td>✔️</td><td>✔️</td><td>✔️</td></tr>
      <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
      {/* SVQ Group */}
      <tr><td>SVQ-S</td><td rowSpan="5">DAC</td><td rowSpan="5">SVQ</td><td>-</td><td>✔️</td><td></td><td></td></tr>
      <tr><td>SVQ-S+</td><td>✔️</td><td>✔️</td><td></td><td></td></tr>
      <tr><td>SVQ-A</td><td>-</td><td></td><td>✔️</td><td></td></tr>
      <tr><td>SVQ-M</td><td>-</td><td></td><td></td><td>✔️</td></tr>
      <tr><td>SVQ-3</td><td>-</td><td>✔️</td><td>✔️</td><td>✔️</td></tr>
      <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
      {/* FSQ Group */}
      <tr><td>FSQ-S</td><td rowSpan="4">DAC</td><td rowSpan="4">FSQ</td><td>-</td><td>✔️</td><td></td><td></td></tr>
      <tr><td>FSQ-A</td><td>-</td><td></td><td>✔️</td><td></td></tr>
      <tr><td>FSQ-M</td><td>-</td><td></td><td></td><td>✔️</td></tr>
      <tr><td>FSQ-3</td><td>-</td><td>✔️</td><td>✔️</td><td>✔️</td></tr>
      <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
      {/* Unit-KMeans Group */}
      <tr><td>K-means-S</td><td>Unit-HifiGAN</td><td>K-means</td><td>-</td><td>✔️</td><td></td><td></td></tr>
    </tbody>
  </table>
</div>


      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Sampling Rate Effect */}
        <details className="border rounded-lg">
        <summary className="cursor-pointer p-4 bg-blue-100 text-blue-800 font-semibold text-lg">
              🗣️ Speech
            </summary>
          <div className="overflow-x-auto bg-white p-4 rounded-xl shadow border text-black">
          <table className="table-auto min-w-full border border-gray-300 text-sm text-center">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan="2" className="px-2 py-1 text-left border-r">Model / SR (kHz)</th>
      <th colSpan="2" className="border-r">SDR ↑</th>
      <th colSpan="2" className="border-r">SI-SNR ↑</th>
      <th colSpan="2" className="border-r">PESQ ↑</th>
      <th colSpan="2" className="border-r">UTMOS ↑</th>
      <th colSpan="2" className="border-r">DNSMOS P835 ↑</th>
      <th colSpan="2" className="border-r">WER ↓</th>
      <th colSpan="2">Spk Sim ↑</th>
    </tr>
    <tr>
      {["16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1"].map((sr, i) => {
        const isRight = i % 2 === 1 && i < 12;
        return (
          <th key={i} className={`px-2 py-1 ${isRight ? "border-r" : ""}`}>{sr}</th>
        );
      })}
    </tr>
  </thead>
  <tbody>
    {[
      ["Ground truth", "-", "-", "-", "-", "-", "-", "4.09", "4.09", "3.18", "3.18", "2.83", "2.83", "-", "-"],
      ["RVQ-S", "4.08", "8.24", "1.15", "6.38", "2.59", "3.24", "3.35", "3.62", "3.16", "3.16", "2.04", "2.63", "0.67", "0.90"],
      ["RVQ-S+", "1.63", "8.40", "-1.77", "5.67", "2.22", "3.30", "3.12", "3.65", "3.12", "3.14", "2.12", "3.17", "0.69", "0.89"],
      ["RVQ-A", "0.59", "6.92", "-3.36", "4.27", "2.02", "2.86", "1.81", "3.15", "2.58", "3.06", "2.47", "2.92", "0.51", "0.73"],
      ["RVQ-M", "2.80", "6.74", "-0.68", "4.61", "2.00", "2.41", "1.64", "2.33", "2.64", "2.68", "3.20", "2.85", "0.44", "0.56"],
      ["RVQ-3", "2.46", "7.50", "-1.12", "4.63", "2.43", "3.06", "2.71", "3.33", "2.96", "3.08", "2.22", "2.66", "0.61", "0.87"],
      ["SVQ-S", "-4.90", "0.92", "-13.59", "-2.04", "1.43", "1.69", "2.19", "2.61", "3.09", "3.10", "13.16", "8.28", "0.35", "0.53"],
      ["SVQ-S+", "-4.45", "-0.64", "-11.74", "-3.64", "1.42", "1.63", "2.14", "2.40", "3.00", "3.07", "13.71", "7.89", "0.36", "0.52"],
      ["SVQ-A", "-11.80", "-5.04", "-33.46", "-9.56", "1.19", "1.18", "1.25", "1.26", "1.86", "1.97", "31.40", "34.68", "0.19", "0.14"],
      ["SVQ-M", "-5.19", "-4.70", "-11.17", "-7.89", "1.20", "1.14", "1.29", "1.24", "2.19", "1.56", "14.88", "33.87", "0.15", "0.11"],
      ["SVQ-3", "-5.90", "-3.09", "-15.13", "-7.12", "1.29", "1.79", "1.44", "2.57", "3.10", "3.01", "22.24", "6.71", "0.26", "0.49"],
      ["FSQ-S", "3.89", "4.58", "1.75", "2.47", "2.08", "2.10", "3.29", "3.06", "3.21", "3.12", "3.57", "4.02", "0.48", "0.66"],
      ["FSQ-A", "1.14", "1.00", "-1.89", "-1.58", "1.94", "1.74", "2.84", "2.41", "3.15", "2.97", "5.12", "7.59", "0.43", "0.39"],
      ["FSQ-M", "-1.08", "-2.09", "-4.39", "-4.61", "1.39", "1.22", "1.57", "1.26", "2.66", "2.04", "24.46", "20.26", "0.17", "0.16"],
      ["FSQ-3", "2.41", "1.29", "0.01", "-1.28", "1.97", "1.79", "3.06", "2.57", "3.20", "3.01", "4.35", "6.71", "0.44", "0.49"],
      ["K-means-S", "-18.21", "-", "-42.98", "-", "1.05", "-", "2.28", "-", "2.46", "-", "6.78", "-", "0.13", "-"]
    ].flatMap((row, i) => {
      const groupEndIndices = [0,5, 10, 14]; // after RVQ, SVQ, FSQ
      const dataRow = (
        <tr key={`row-${i}`}>
          {row.map((val, j) => {
            const isMetricGroupEnd = j % 2 === 0 && j !== 0 && j < 13;
            const isModelCol = j === 0;
            return (
              <td
                key={j}
                className={`px-2 py-1 whitespace-nowrap ${isModelCol ? "text-left border-r" : ""} ${isMetricGroupEnd ? "border-r" : ""}`}
              >
                {val}
              </td>
            );
          })}
        </tr>
      );
  
      const hrRow = (
        <tr key={`hr-${i}`}>
          <td colSpan={15}>
            <hr className="border-gray-400 my-1" />
          </td>
        </tr>
      );
  
      return groupEndIndices.includes(i) ? [dataRow, hrRow] : [dataRow];
    })}
  </tbody>
</table>

</div>

        </details>

        {/* Domain Effect */}
        <details className="border rounded-lg">
        <summary className="cursor-pointer p-4 bg-red-100 text-red-800 font-semibold text-lg"> 🔊 🎵 General Audio & Music</summary>
          <div className="overflow-x-auto bg-white p-4 rounded-xl shadow border text-black">
          {/* <table className="table-auto min-w-full border border-gray-300 text-sm text-center">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan="2" className="px-2 py-1">Model / SR (kHz)</th>
      <th colSpan="10" className="border-r">Audio</th>
      <th colSpan="10">Music</th>
    </tr>
    <tr>
      {Array.from({ length: 20 }).map((_, i) => {
        const label = i % 2 === 0 ? "16" : "44.1";
        const needsBorder = i === 9;
        return (
          <th key={`a-${i}`} className={needsBorder ? "border-r" : ""}>
            {label}
          </th>
        );
      })}
    </tr>
  </thead>
  <tbody>
    {[
      ["RVQ-S", -4.05, 2.85, -4.02, 2.51, -10.07, -0.02, 4.18, 3.81, 2.59, 2.66, 0.45, 6.80, 0.44, 6.75, -2.29, 4.83, 4.21, 4.17, 2.67, 2.60],
      ["RVQ-S+", -8.90, 2.52, -8.83, 2.19, -17.57, -1.14, 4.13, 3.79, 2.57, 2.63, -6.73, 6.60, -6.70, 6.55, -11.10, 4.46, 4.07, 4.24, 2.64, 2.70],
      ["RVQ-A", -0.59, 3.65, -0.61, 3.21, -5.56, 0.48, 4.22, 3.78, 2.63, 2.65, 5.78, 8.24, 5.70, 8.17, 2.87, 5.97, 4.21, 4.12, 2.71, 2.72],
      ["RVQ-M", 0.65, 3.76, 0.60, 3.35, -4.07, 1.06, 4.13, 3.62, 2.63, 2.63, 6.34, 8.33, 6.25, 8.26, 3.82, 6.48, 4.13, 3.99, 2.70, 2.68],
      ["RVQ-3", 0.14, 3.99, 0.11, 3.50, -4.47, 0.70, 4.17, 3.83, 2.61, 2.65, 5.75, 8.54, 5.68, 8.46, 3.32, 6.34, 4.12, 4.07, 2.68, 2.72],
      // Add remaining rows here...
    ].map((row, i) => (
      <tr key={i}>
        {row.map((val, j) => {
          const isMetricGroupEnd = j === 10;
          return (
            <td key={j} className={`border px-2 py-1 whitespace-nowrap ${isMetricGroupEnd ? "border-r" : ""}`}>
              {typeof val === "number" ? val.toFixed(2) : val}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table> */}
<table className="table-auto min-w-full border border-gray-300 text-sm text-center">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan="2" className="px-2 py-1 text-left border-r">Model / SR (kHz)</th>
      {["Audio", "Music"].flatMap((domain) => (
        [
          <th key={domain + "-SDR"} colSpan="2" className="border-r">SDR ↑</th>,
          <th key={domain + "-CI-SDR"} colSpan="2" className="border-r">CI-SDR ↑</th>,
          <th key={domain + "-SI-SNR"} colSpan="2" className="border-r">SI-SNR ↑</th>,
          <th key={domain + "-VISQOL"} colSpan="2" className="border-r">VISQOL ↑</th>,
          <th key={domain + "-SingMOS"} colSpan="2">{domain === "Music" ? "SingMOS ↑" : <span className="border-r">SingMOS ↑</span>}</th>,
        ]
      ))}
    </tr>
    <tr>
      {Array.from({ length: 20 }, (_, i) => {
        const sr = i % 2 === 0 ? "16" : "44.1";
        const isRight = i % 2 === 1 && i < 18;
        return (
          <th key={i} className={`px-2 py-1 ${isRight ? "border-r" : ""}`}>{sr}</th>
        );
      })}
    </tr>
  </thead>
  <tbody>
    {[ 
      ["RVQ-S", -4.05, 2.85, -4.02, 2.51, -10.07, -0.02, "4.18", "3.81", 2.59, "2.66", 0.45, 6.80, 0.44, 6.75, -2.29, 4.83, "4.21", "4.17", 2.67, 2.60],
      ["RVQ-S+", -8.90, 2.52, -8.83, 2.19, -17.57, -1.14, 4.13, 3.79, 2.57, 2.63, -6.73, 6.60, -6.70, 6.55, -11.10, 4.46, 4.07, 4.24, 2.64, 2.70],
      ["RVQ-A", -0.59, 3.65, -0.61, 3.21, -5.56, 0.48, 4.22, 3.78, "2.63", "2.65", 5.78, 8.24, 5.70, 8.17, 2.87, 5.97, 4.21, 4.12, "2.71", "2.72"],
      ["RVQ-M", 0.65, 3.76, 0.60, 3.35, -4.07, 1.06, 4.13, 3.62, "2.63", 2.63, 6.34, 8.33, 6.25, 8.26, 3.82, 6.48, 4.13, 3.99, 2.70, 2.68],
      ["RVQ-3", 0.14, 3.99, 0.11, 3.50, -4.47, 0.70, 4.17, 3.83, 2.61, "2.65", 5.75, 8.54, 5.68, 8.46, 3.32, 6.34, 4.12, 4.07, 2.68, "2.72"],
      ["SVQ-S", -14.80, -8.43, -14.72, -8.07, -31.86, -14.73, 3.83, 3.28, 2.55, 2.59, -14.25, -4.78, -14.22, -4.76, -27.16, -7.77, 3.68, 3.64, 2.59, 2.70],
      ["SVQ-S+", -14.74, -9.39, -14.66, -9.00, -30.69, -16.37, 3.84, 3.23, 2.54, 2.59, -15.10, -5.24, -15.06, -5.23, -27.69, -8.80, 3.69, 3.60, 2.58, 2.68],
      ["SVQ-A", -13.08, -6.80, -13.00, -6.46, -30.70, -12.80, 3.86, 3.32, 2.56, 2.59, -6.54, -0.49, -6.52, -0.40, -14.76, -3.21, 3.68, 3.52, 2.65, 2.69],
      ["SVQ-M", -6.53, -5.50, -6.47, -5.19, -13.43, -10.62, 3.94, 3.33, 2.59, 2.58, -0.35, 0.52, -0.35, 0.52, -2.94, -1.80, 3.87, 3.33, 2.70, 2.63],
      ["SVQ-3", -9.28, -7.47, -9.21, -7.12, -19.50, -14.32, 3.88, 3.34, 2.52, 2.62, -2.75, -1.35, -2.73, -1.35, -6.75, -4.63, 3.72, 3.54, 2.63, 2.73],
      ["FSQ-S", -7.32, -4.26, -7.26, -4.04, -14.22, -8.12, 4.05, 3.32, 2.60, 2.63, -5.04, -0.37, -5.02, -0.37, -8.42, -2.84, 3.80, 3.65, 2.69, 2.71],
      ["FSQ-A", -2.79, -2.00, -2.76, -1.00, -7.05, -5.37, 4.09, 3.53, "2.63", "2.65", 0.90, 2.62, 0.80, 2.60, -1.14, 0.49, 4.00, 3.92, 2.70, 2.73],
      ["FSQ-M", -3.37, -3.25, -3.33, -3.05, -8.23, -6.85, 4.02, 3.41, 2.62, 2.60, 1.54, 2.70, 1.52, 2.77, -0.67, 0.66, 3.99, 3.54, 2.71, 2.66],
      ["FSQ-3", -3.22, -2.36, -3.19, -2.24, -7.86, -6.01, 4.06, 3.53, 2.61, 2.62, 0.89, 2.75, 0.88, 2.73, -1.38, 0.19, 3.96, 3.74, 2.69, 2.68],
      ["K-means-S", -21.01, "-", -20.89, "-", -47.37, "-", 3.14, "-", "2.78", "-", -19.53, "-", -19.49, "-", -46.03, "-", 2.82, "-", "2.87", "-"],
    ].flatMap((row, i, arr) => {
      const groupEndIndices = [4, 9, 13]; // last indices of RVQ, SVQ, FSQ
      const dataRow = (
        <tr key={`row-${i}`}>
          {row.map((val, j) => {
            const isMetricGroupEnd = j % 2 === 0 && j !== 0 && j < 20;
            const isModelCol = j === 0;
            return (
              <td
                key={j}
                className={`px-2 py-1 whitespace-nowrap ${isModelCol ? "text-left border-r" : ""} ${isMetricGroupEnd ? "border-r" : ""}`}
              >
                {val}
              </td>
            );
          })}
        </tr>
      );
  
      const hrRow = (
        <tr key={`hr-${i}`}>
          <td colSpan={22}>
            <hr className="border-gray-400 my-1" />
          </td>
        </tr>
      );
  
      return groupEndIndices.includes(i) ? [dataRow, hrRow] : [dataRow];
    })}
  </tbody>
</table>

</div>

        </details>
      </div>

      {/* Navigation */}
      <div className="text-center pt-8">
        <Link
          to="/benchmarks"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
        >
          ⬅️ Back to Benchmark Overview
        </Link>
      </div>
    </div>
  );
}
