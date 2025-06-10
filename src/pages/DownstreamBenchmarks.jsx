import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DownstreamBenchmarks() {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-primary text-center">Downstream Benchmarks</h2>

      {/* Dataset Summary Table */}
      <div className="overflow-x-auto text-black bg-white p-4 rounded-xl shadow">
        <p className="text-lg font-semibold text-primary mb-2">Datasets and Tasks Overview</p>
        <table className="table-auto min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left">Task</th>
              <th className="text-left">Dataset</th>
              <th className="text-left">Architecture</th>
              <th className="text-left">Metric(s)</th>
              <th className="text-left">Data Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold text-center bg-blue-100"><td colSpan="5">Speech (Discriminative)</td></tr>
            <tr><td>ASR (En)</td><td>LibriSpeech</td><td>Branchformer</td><td>WER</td><td><a href="https://openslr.org/12" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>ASR (Low-resource)</td><td>CommonVoice 17.0</td><td>BiLSTM</td><td>WER</td><td><a href="https://commonvoice.mozilla.org/en/datasets" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Speaker ID / Verification</td><td>VoxCeleb1</td><td>ECAPA-TDNN</td><td>Accuracy / EER</td><td><a href="https://www.robots.ox.ac.uk/~vgg/data/voxceleb/vox1.html" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Emotion Recognition</td><td>IEMOCAP</td><td>ECAPA-TDNN</td><td>Accuracy</td><td><a href="https://sail.usc.edu/iemocap/" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Keyword Spotting</td><td>Speech Commands</td><td>ECAPA-TDNN</td><td>Accuracy</td><td><a href="https://www.tensorflow.org/datasets/catalog/speech_commands" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Intent Classification</td><td>SLURP</td><td>BiLSTM+Linear</td><td>Accuracy</td><td><a href="https://zenodo.org/record/4274930" className="text-blue-600 underline">Link</a></td></tr>
            <tr className="font-semibold text-center bg-purple-100"><td colSpan="5">Speech (Generative)</td></tr>
            <tr><td>Speech Enhancement</td><td>VoiceBank</td><td>Conformer</td><td>DNSMOS / dWER</td><td><a href="https://datashare.ed.ac.uk/handle/10283/2791" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Speech Separation</td><td>Libri2Mix</td><td>Conformer</td><td>DNSMOS / dWER / SpkSim</td><td><a href="https://github.com/JorisCos/LibriMix" className="text-blue-600 underline">Link</a></td></tr>
            <tr className="font-semibold text-center bg-red-100"><td colSpan="5">Music</td></tr>
            <tr><td>Music Genre Classification</td><td>GTZAN</td><td>ECAPA-TDNN</td><td>Accuracy</td><td><a href="https://huggingface.co/datasets/marsyas/gtzan" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Music Source Separation</td><td>MUSDB</td><td>Conformer</td><td>SDR / SIR / SAR</td><td><a href="https://sigsep.github.io/datasets/musdb.html" className="text-blue-600 underline">Link</a></td></tr>
            <tr className="font-semibold text-center bg-red-100"><td colSpan="5">General Audio</td></tr>
            <tr><td>Sound Event Classification</td><td>ESC-50</td><td>ECAPA-TDNN</td><td>Accuracy</td><td><a href="https://github.com/karolpiczak/ESC-50" className="text-blue-600 underline">Link</a></td></tr>
            <tr><td>Audio Separation</td><td>FUSS</td><td>Conformer</td><td>SDR</td><td><a href="https://zenodo.org/records/4012661" className="text-blue-600 underline">Link</a></td></tr>
          </tbody>
        </table>
      </div>

      {/* Result Tables as Accordions */}
      <div className="max-w-6xl mx-auto space-y-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 bg-blue-100 text-blue-800 font-semibold text-lg">🗣️ Speech (Discriminative)</summary>
          <div className="overflow-x-auto p-4 bg-white text-black">
          <table className="table-auto min-w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan="3" className="px-2 py-1 text-left">Tokenizer</th>
      <th rowSpan="3" className="px-2 py-1 text-center">#Q</th>
      <th colSpan="2" className="px-2 py-1 text-center">ASR-En</th>
      <th colSpan="2" className="px-2 py-1 text-center">ASR-LR</th>
      <th rowSpan="2" className="px-2 py-1 text-center">ER<br/>(ACC↑)</th>
      <th rowSpan="2" className="px-2 py-1 text-center">IC<br/>(ACC↑)</th>
      <th rowSpan="2" className="px-2 py-1 text-center">KS<br/>(ACC↑)</th>
      <th rowSpan="2" className="px-2 py-1 text-center">SI<br/>(ACC↑)</th>
      <th rowSpan="2" className="px-2 py-1 text-center">SV<br/>(EER↓)</th>
    </tr>
    <tr>
      <th className="px-2 py-1 text-center">Clean</th>
      <th className="px-2 py-1 text-center">Other</th>
      <th className="px-2 py-1 text-center">Welsh</th>
      <th className="px-2 py-1 text-center">Basque</th>
    </tr>
  </thead>
  <tbody>
    <tr className="font-semibold text-primary">
      <td className="text-left">Continuous</td>
      <td className="text-center">--</td>
      <td className="text-center"><u><b>4.07</b></u></td>
      <td className="text-center"><u><b>6.81</b></u></td>
      <td className="text-center"><u><b>41.77</b></u></td>
      <td className="text-center"><u><b>14.32</b></u></td>
      <td className="text-center"><u><b>63.10</b></u></td>
      <td className="text-center"><u><b>86.10</b></u></td>
      <td className="text-center"><u><b>99.00</b></u></td>
      <td className="text-center"><u><b>99.70</b></u></td>
      <td className="text-center"><u><b>2.10</b></u></td>
    </tr>

    <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>

    <tr>
      <td rowSpan="3" className="text-left">Enc-SMA-24</td>
      <td className="text-center">2</td>
      <td className="text-center">12.70±0.37</td>
      <td className="text-center">29.09±0.13</td>
      <td className="text-center">90.90±0.32</td>
      <td className="text-center">51.00±0.98</td>
      <td className="text-center">45.50±0.02</td>
      <td className="text-center">42.90±0.16</td>
      <td className="text-center">77.73±3.12</td>
      <td className="text-center">89.81±5.46</td>
      <td className="text-center">18.33±0.26</td>
    </tr>
    <tr>
      <td className="text-center">8</td>
      <td className="text-center">8.43±0.13</td>
      <td className="text-center">21.77±0.36</td>
      <td className="text-center">84.53±1.90</td>
      <td className="text-center">45.36±0.57</td>
      <td className="text-center">44.73±0.02</td>
      <td className="text-center">40.03±0.29</td>
      <td className="text-center">74.30±1.69</td>
      <td className="text-center">94.26±3.99</td>
      <td className="text-center">13.54±0.57</td>
    </tr>
    <tr>
      <td className="text-center">32</td>
      <td className="text-center">9.95±1.17</td>
      <td className="text-center">23.24±1.22</td>
      <td className="text-center">97.39±1.19</td>
      <td className="text-center">58.21±0.92</td>
      <td className="text-center">42.96±0.02</td>
      <td className="text-center">33.66±2.65</td>
      <td className="text-center">69.10±3.42</td>
      <td className="text-center">91.12±1.92</td>
      <td className="text-center"><u>10.12±6.66</u></td>
    </tr>
    <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>

    <tr>
  <td rowSpan="3" className="text-left">DAC-SMA-24</td>
  <td className="text-center">2</td>
  <td className="text-center">14.84±0.25</td>
  <td className="text-center">33.88±0.20</td>
  <td className="text-center">95.21±0.84</td>
  <td className="text-center">68.93±0.42</td>
  <td className="text-center">45.20±0.01</td>
  <td className="text-center">29.83±0.19</td>
  <td className="text-center">67.27±1.56</td>
  <td className="text-center"><b>97.88±0.79</b></td>
  <td className="text-center">21.80±1.00</td>
</tr>
<tr>
  <td className="text-center">8</td>
  <td className="text-center">10.73±0.10</td>
  <td className="text-center">25.39±0.20</td>
  <td className="text-center">97.20±0.14</td>
  <td className="text-center">62.45±1.40</td>
  <td className="text-center">44.73±0.02</td>
  <td className="text-center">23.97±0.41</td>
  <td className="text-center">65.27±2.82</td>
  <td className="text-center">87.33±10.98</td>
  <td className="text-center">15.86±5.26</td>
</tr>
<tr>
  <td className="text-center">32</td>
  <td className="text-center">13.13±0.16</td>
  <td className="text-center">28.47±0.19</td>
  <td className="text-center">98.96±0.18</td>
  <td className="text-center">73.57±1.56</td>
  <td className="text-center">43.20±0.02</td>
  <td className="text-center">44.60±39.19</td>
  <td className="text-center">68.67±2.91</td>
  <td className="text-center">87.69±4.99</td>
  <td className="text-center">17.12±0.76</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
    <tr>
  <td rowSpan="2" className="text-left">ST-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center">9.48±0.10</td>
  <td className="text-center">22.68±0.10</td>
  <td className="text-center">71.36±0.32</td>
  <td className="text-center">42.17±0.05</td>
  <td className="text-center">54.86±0.01</td>
  <td className="text-center">56.80±0.08</td>
  <td className="text-center">94.11±0.63</td>
  <td className="text-center">73.16±0.37</td>
  <td className="text-center">24.23±0.29</td>
</tr>
<tr>
  <td className="text-center">8</td>
  <td className="text-center">9.06±0.45</td>
  <td className="text-center">21.72±0.23</td>
  <td className="text-center">68.36±0.44</td>
  <td className="text-center">35.35±0.22</td>
  <td className="text-center">55.00±0.01</td>
  <td className="text-center">53.83±0.05</td>
  <td className="text-center">94.11±0.07</td>
  <td className="text-center">96.78±0.45</td>
  <td className="text-center"><u>10.45±0.43</u></td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2" className="text-left">Mimi-S-24</td>
  <td className="text-center">8</td>
  <td className="text-center">9.73±0.61</td>
  <td className="text-center">22.65±0.41</td>
  <td className="text-center">91.59±0.15</td>
  <td className="text-center">59.18±8.52</td>
  <td className="text-center">51.13±0.02</td>
  <td className="text-center">53.83±0.19</td>
  <td className="text-center">92.18±0.20</td>
  <td className="text-center">79.50±0.43</td>
  <td className="text-center">18.68±0.35</td>
</tr>
<tr>
  <td className="text-center">32</td>
  <td className="text-center">10.84±0.56</td>
  <td className="text-center">24.10±0.36</td>
  <td className="text-center">96.89±0.07</td>
  <td className="text-center">58.15±6.90</td>
  <td className="text-center">46.76±0.01</td>
  <td className="text-center">50.73±0.50</td>
  <td className="text-center">91.31±0.19</td>
  <td className="text-center">63.93±13.64</td>
  <td className="text-center">23.91±4.60</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>

    <tr>
  <td rowSpan="2" className="text-left">DWavL-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center"><u>4.78±0.25</u></td>
  <td className="text-center"><u>10.58±0.17</u></td>
  <td className="text-center"><u>58.98±0.15</u></td>
  <td className="text-center"><u>22.02±0.17</u></td>
  <td className="text-center"><u>61.53±0.02</u></td>
  <td className="text-center"><u>76.33±0.17</u></td>
  <td className="text-center"><u>96.82±0.92</u></td>
  <td className="text-center">76.57±0.33</td>
  <td className="text-center">22.41±0.19</td>
</tr>
<tr>
  <td className="text-center">6</td>
  <td className="text-center"><b>5.07±0.17</b></td>
  <td className="text-center"><b>9.57±0.20</b></td>
  <td className="text-center"><b>48.94±0.38</b></td>
  <td className="text-center"><b>19.66±0.33</b></td>
  <td className="text-center"><b>63.20±0.01</b></td>
  <td className="text-center"><b>78.73±0.12</b></td>
  <td className="text-center"><b>95.89±0.50</b></td>
  <td className="text-center">92.31±0.09</td>
  <td className="text-center">13.47±0.22</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td className="text-left">SQ-SMA-16</td>
  <td className="text-center">4</td>
  <td className="text-center">91.57±0.49</td>
  <td className="text-center">92.90±0.41</td>
  <td className="text-center">94.80±0.88</td>
  <td className="text-center">94.24±1.24</td>
  <td className="text-center">41.30±0.06</td>
  <td className="text-center">58.13±0.26</td>
  <td className="text-center">92.74±0.42</td>
  <td className="text-center"><u>97.38±0.03</u></td>
  <td className="text-center"><b>9.69±0.25</b></td>
</tr>

<tr>
  <td className="text-left">SQ-SMA-16*</td>
  <td className="text-center">4</td>
  <td className="text-center">11.63±0.08</td>
  <td className="text-center">30.91±0.17</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td className="text-left">WT-SMA-24</td>
  <td className="text-center">1</td>
  <td className="text-center">16.11±0.18</td>
  <td className="text-center">35.48±0.35</td>
  <td className="text-center">97.41±0.08</td>
  <td className="text-center">75.82±0.20</td>
  <td className="text-center">43.43±0.02</td>
  <td className="text-center">15.25±0.15</td>
  <td className="text-center">59.13±2.10</td>
  <td className="text-center">85.90±2.48</td>
  <td className="text-center">19.38±0.36</td>
</tr>

  
  </tbody>
</table>
  </div>
</details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 bg-purple-100 text-purple-800 font-semibold text-lg">🗣️ Speech (Generative)</summary>
          <div className="overflow-x-auto p-4 bg-white text-black">
    <table className="table-auto min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th rowSpan="2" className="px-2 py-1 text-left">Tokenizer</th>
          <th rowSpan="2" className="px-2 py-1">#Q</th>
          <th colSpan="3" className="px-2 py-1">SE</th>
          <th colSpan="4" className="px-2 py-1">SS - Speech</th>
        </tr>
        <tr>
          <th className="px-2 py-1">DNSMOS</th>
          <th className="px-2 py-1">dWER↓</th>
          <th className="px-2 py-1">Spk Sim↑</th>
          <th className="px-2 py-1">DNSMOS</th>
          <th className="px-2 py-1">Sep DNSMOS</th>
          <th className="px-2 py-1">dWER↓</th>
          <th className="px-2 py-1">Spk Sim↑</th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-semibold text-primary">
          <td className="text-left">Continuous</td>
          <td className="text-center">--</td>
          <td className="text-center">3.49</td>
          <td className="text-center"><u><b>4.92</b></u></td>
          <td className="text-center"><u><b>0.93</b></u></td>
          <td className="text-center">--</td>
          <td className="text-center">3.68</td>
          <td className="text-center"><u><b>9.97</b></u></td>
          <td className="text-center"><u><b>0.94</b></u></td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td rowSpan="3">Enc-SMA-24</td>
          <td className="text-center">2</td>
          <td className="text-center">3.15±0.01</td>
          <td className="text-center">34.95±0.64</td>
          <td className="text-center">0.86±0.00</td>
          <td className="text-center">3.19</td>
          <td className="text-center">3.13±0.00</td>
          <td className="text-center">80.33±1.77</td>
          <td className="text-center">0.88±0.00</td>
        </tr>
        <tr>
          <td className="text-center">8</td>
          <td className="text-center">3.08±0.01</td>
          <td className="text-center">22.70±1.84</td>
          <td className="text-center">0.88±0.00</td>
          <td className="text-center">3.54</td>
          <td className="text-center">3.08±0.00</td>
          <td className="text-center">53.37±0.65</td>
          <td className="text-center">0.90±0.00</td>
        </tr>
        <tr>
          <td className="text-center">32</td>
          <td className="text-center">2.78±0.01</td>
          <td className="text-center">65.70±6.09</td>
          <td className="text-center">0.80±0.01</td>
          <td className="text-center">3.72</td>
          <td className="text-center">2.97±0.01</td>
          <td className="text-center">92.42±0.97</td>
          <td className="text-center">0.85±0.00</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td rowSpan="3">DAC-SMA-24</td>
          <td className="text-center">2</td>
          <td className="text-center">3.26±0.01</td>
          <td className="text-center">54.85±1.82</td>
          <td className="text-center">0.86±0.00</td>
          <td className="text-center">3.16</td>
          <td className="text-center">3.01±0.00</td>
          <td className="text-center">101.19±1.99</td>
          <td className="text-center">0.85±0.00</td>
        </tr>
        <tr>
          <td className="text-center">8</td>
          <td className="text-center">3.51±0.01</td>
          <td className="text-center">29.44±3.93</td>
          <td className="text-center"><b>0.90±0.01</b></td>
          <td className="text-center">3.67</td>
          <td className="text-center">3.30±0.00</td>
          <td className="text-center">52.77±2.48</td>
          <td className="text-center"><b>0.93±0.00</b></td>
        </tr>
        <tr>
          <td className="text-center">32</td>
          <td className="text-center">2.93±0.01</td>
          <td className="text-center">30.66±0.97</td>
          <td className="text-center">0.88±0.00</td>
          <td className="text-center"><u>3.76</u></td>
          <td className="text-center">2.67±0.01</td>
          <td className="text-center">92.07±0.05</td>
          <td className="text-center">0.88±0.01</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
    <tr>
  <td rowSpan="2">ST-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center">3.19±0.02</td>
  <td className="text-center">29.98±0.58</td>
  <td className="text-center">0.86±0.00</td>
  <td className="text-center">3.20</td>
  <td className="text-center">3.13±0.00</td>
  <td className="text-center">84.94±0.63</td>
  <td className="text-center">0.87±0.00</td>
</tr>
<tr>
  <td className="text-center">8</td>
  <td className="text-center">3.49±0.01</td>
  <td className="text-center">21.65±0.57</td>
  <td className="text-center">0.87±0.00</td>
  <td className="text-center">3.72</td>
  <td className="text-center">3.43±0.01</td>
  <td className="text-center">60.90±0.77</td>
  <td className="text-center"><u>0.91±0.00</u></td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2">Mimi-S-24</td>
  <td className="text-center">8</td>
  <td className="text-center">3.25±0.01</td>
  <td className="text-center">67.56±2.21</td>
  <td className="text-center">0.85±0.00</td>
  <td className="text-center">3.65</td>
  <td className="text-center">3.29±0.00</td>
  <td className="text-center">109.30±3.30</td>
  <td className="text-center">0.87±0.00</td>
</tr>
<tr>
  <td className="text-center">32</td>
  <td className="text-center">3.18±0.01</td>
  <td className="text-center">102.61±2.40</td>
  <td className="text-center">0.82±0.00</td>
  <td className="text-center">3.72</td>
  <td className="text-center">3.00±0.00</td>
  <td className="text-center">137.00±2.16</td>
  <td className="text-center">0.82±0.00</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2">DWavL-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center"><u>3.56±0.01</u></td>
  <td className="text-center">25.88±2.15</td>
  <td className="text-center">0.88±0.00</td>
  <td className="text-center">3.57</td>
  <td className="text-center">3.56±0.00</td>
  <td className="text-center"><u>49.57±0.64</u></td>
  <td className="text-center">0.85±0.00</td>
</tr>
<tr>
  <td className="text-center">6</td>
  <td className="text-center"><b>3.57±0.01</b></td>
  <td className="text-center"><b>9.43±0.33</b></td>
  <td className="text-center"><u>0.89±0.00</u></td>
  <td className="text-center">3.75</td>
  <td className="text-center"><b>3.75±0.01</b></td>
  <td className="text-center"><b>30.39±0.45</b></td>
  <td className="text-center"><u>0.91±0.00</u></td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>

<tr>
  <td>SQ-SMA-16</td>
  <td className="text-center">4</td>
  <td className="text-center">3.28±0.01</td>
  <td className="text-center">122.33±8.74</td>
  <td className="text-center">0.83±0.00</td>
  <td className="text-center"><b>3.77</b></td>
  <td className="text-center">3.19±0.00</td>
  <td className="text-center">136.00±3.58</td>
  <td className="text-center">0.83±0.00</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td>WT-SMA-24</td>
  <td className="text-center">1</td>
  <td className="text-center">3.33±0.01</td>
  <td className="text-center">67.53±10.65</td>
  <td className="text-center">0.85±0.00</td>
  <td className="text-center">3.57</td>
  <td className="text-center">3.42±0.00</td>
  <td className="text-center">118.33±4.50</td>
  <td className="text-center">0.86±0.00</td>
</tr>
<tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td>Mixture</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
  <td className="text-center">3.43</td>
  <td className="text-center">--</td>
  <td className="text-center">--</td>
</tr>

      </tbody>
    </table>
  </div>
</details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 bg-red-100 text-red-800 font-semibold text-lg"> 🔊 🎵 General Audio & Music</summary>
          <div className="overflow-x-auto p-4 bg-white text-black">
    <table className="table-auto min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th rowSpan="2" className="text-left">Tokenizer</th>
          <th rowSpan="2">#Q</th>
          <th colSpan="2">SS - Audio (SI-SDRi ↑)</th>
          <th colSpan="4">SS - Music</th>
          <th rowSpan="2">ESC<br/>(ACC ↑)</th>
          <th rowSpan="2">MGC<br/>(ACC ↑)</th>
        </tr>
        <tr>
          <th>Rec</th>
          <th>Sep</th>
          <th>Rec</th>
          <th>Sep</th>
          <th>SAR ↑</th>
          <th>SIR ↑</th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-semibold text-primary">
          <td className="text-left">Continuous</td>
          <td className="text-center">--</td>
          <td className="text-center">--</td>
          <td className="text-center"><u><b>15.07</b></u></td>
          <td className="text-center">--</td>
          <td className="text-center"><u><b>13.29</b></u></td>
          <td className="text-center"><u><b>9.56</b></u></td>
          <td className="text-center"><u><b>11.99</b></u></td>
          <td className="text-center"><u><b>92.91</b></u></td>
          <td className="text-center"><u><b>87.00</b></u></td>
        </tr>
        
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td rowSpan="3">Enc-SMA-24</td>
          <td className="text-center">2</td>
          <td className="text-center">0.76</td>
          <td className="text-center"><u>7.03±0.49</u></td>
          <td className="text-center">3.36</td>
          <td className="text-center"><u>1.49±2.04</u></td>
          <td className="text-center"><u>-2.80±1.68</u></td>
          <td className="text-center"><b>5.96±1.52</b></td>
          <td className="text-center">34.83±0.47</td>
          <td className="text-center"><b>70.33±1.70</b></td>
        </tr>
        <tr>
          <td className="text-center">8</td>
          <td className="text-center">3.87</td>
          <td className="text-center"><b>9.53±0.33</b></td>
          <td className="text-center">7.99</td>
          <td className="text-center"><b>1.98±0.36</b></td>
          <td className="text-center"><b>-1.95±0.33</b></td>
          <td className="text-center"><u>5.26±0.22</u></td>
          <td className="text-center"><b>37.00±0.73</b></td>
          <td className="text-center"><u>54.67±3.86</u></td>
        </tr>
        <tr>
          <td className="text-center">32</td>
          <td className="text-center"><b>5.76</b></td>
          <td className="text-center">-1.73±0.09</td>
          <td className="text-center"><b>11.10</b></td>
          <td className="text-center">-11.72±0.35</td>
          <td className="text-center">-15.00±0.02</td>
          <td className="text-center">-0.42±0.01</td>
          <td className="text-center">35.43±1.45</td>
          <td className="text-center">39.67±1.25</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td rowSpan="3">DAC-SMA-24</td>
          <td className="text-center">2</td>
          <td className="text-center">0.12</td>
          <td className="text-center">3.84±0.48</td>
          <td className="text-center">2.37</td>
          <td className="text-center">1.01±0.17</td>
          <td className="text-center">-3.59±0.09</td>
          <td className="text-center"><b>5.92±0.28</b></td>
          <td className="text-center">31.03±1.84</td>
          <td className="text-center">50.00±0.82</td>
        </tr>
        <tr>
          <td className="text-center">8</td>
          <td className="text-center">3.33</td>
          <td className="text-center">5.62±0.21</td>
          <td className="text-center">6.66</td>
          <td className="text-center">-11.77±0.10</td>
          <td className="text-center">-10.62±2.35</td>
          <td className="text-center">-5.52±3.68</td>
          <td className="text-center">28.60±0.79</td>
          <td className="text-center">47.67±3.09</td>
        </tr>
        <tr>
          <td className="text-center">32</td>
          <td className="text-center"><u>4.73</u></td>
          <td className="text-center">-4.92±0.32</td>
          <td className="text-center"><u>8.54</u></td>
          <td className="text-center">-11.32±0.12</td>
          <td className="text-center">-12.70±0.17</td>
          <td className="text-center">-2.05±0.41</td>
          <td className="text-center"><u>36.67±0.92</u></td>
          <td className="text-center">50.00±0.82</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td className="text-left">SQ-SMA-16</td>
          <td className="text-center">4</td>
          <td className="text-center">3.62</td>
          <td className="text-center">6.54±0.22</td>
          <td className="text-center">5.53</td>
          <td className="text-center">-3.62±0.87</td>
          <td className="text-center">-5.84±0.86</td>
          <td className="text-center">1.42±0.32</td>
          <td className="text-center">31.37±1.37</td>
          <td className="text-center">42.67±0.47</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td className="text-left">WT-SMA-24</td>
          <td className="text-center">1</td>
          <td className="text-center">-24.05</td>
          <td className="text-center">-16.72±0.08</td>
          <td className="text-center">-2.66</td>
          <td className="text-center">-4.52±0.04</td>
          <td className="text-center">-8.32±0.07</td>
          <td className="text-center">2.65±0.11</td>
          <td className="text-center">34.50±0.82</td>
          <td className="text-center">48.00±1.41</td>
        </tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr>
          <td className="text-left">Mixture</td>
          <td className="text-center">--</td>
          <td className="text-center">--</td>
          <td className="text-center">-16.5</td>
          <td className="text-center">--</td>
          <td className="text-center">-7.71</td>
          <td className="text-center">50.01</td>
          <td className="text-center">-∞</td>
          <td className="text-center">--</td>
          <td className="text-center">--</td>
        </tr>
      </tbody>
    </table>
  </div>
</details>
      </div>

      {/* Footer with Back Link and Summary */}
      <div className="text-center pt-8 space-y-4">
        <Link
          to="/benchmarks"
          className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
        >
          ⬅️ Back to Benchmark Overview
        </Link>

        <div className="text-base text-gray-700 dark:text-gray-900 max-w-3xl mx-auto text-left">
  <span className="text-xl mr-2">💡</span>
  Semantic tokenizers are generally more robust, especially in low-resource settings, but still fall short of continuous representations when data is limited. Training downstream models with semantic or semantically-distilled tokenizers tends to be more stable and reliable compared to acoustic tokenizers, which often require larger datasets and more careful model scaling. Overall, discrete tokenizers are more sensitive to architectural choices and hyperparameters of the downstream head, whereas continuous features typically yield more consistent performance across configurations. Therefore,  careful tuning and appropriate scaling of both data and model architecture are crucial for effectively leveraging discrete representations. While discrete tokens offer advantages in efficiency and modularity, continuous representations still lead in overall performance. Bridging this gap is essential for the successful integration of audio tokens into future multimodal language models.</div>

      </div>
    </div>
  );
}
