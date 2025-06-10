import React from 'react';
import { Link } from 'react-router-dom';

export default function AcousticLMBenchmarks() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-primary text-center">Acoustic Language Modeling Benchmarks</h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Speech LM */}
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 bg-blue-100 text-blue-800 font-semibold text-lg">
          🗣️ Speech LM
          </summary>
          <div className="overflow-x-auto p-4 bg-white text-black mt-4" >
          <table className="table-auto min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left">Tokenizer</th>
          <th>#Q</th>
          <th>sBLIMP ↑</th>
          <th>sWUGGY ↑</th>
          <th>sSC ↑</th>
          <th>tSC ↑</th>
          <th>Gender ↑</th>
          <th>Sent. ↑</th>
          <th>Spk ↑</th>
          <th>Sentiment ↑</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>HuBERT 25Hz</td><td className="text-center">1</td><td className="text-center">60.89</td><td className="text-center">70.51</td><td className="text-center">53.23</td><td className="text-center">71.46</td><td className="text-center">69.5</td><td className="text-center">62.5</td><td className="text-center">69.0</td><td className="text-center">53.0</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>Enc-SMA-24</td><td className="text-center">8</td><td className="text-center">51.47</td><td className="text-center">50.90</td><td className="text-center">47.72</td><td className="text-center">48.26</td><td className="text-center">63.0</td><td className="text-center">53.5</td><td className="text-center">65.0</td><td className="text-center">50.5</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>DAC-SMA-16</td><td className="text-center">8</td><td className="text-center">49.73</td><td className="text-center">49.68</td><td className="text-center">51.15</td><td className="text-center">50.40</td><td className="text-center">53.0</td><td className="text-center">48.0</td><td className="text-center">43.0</td><td className="text-center">54.0</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>ST-S-16</td><td className="text-center">8</td><td className="text-center">51.42</td><td className="text-center">54.44</td><td className="text-center">51.09</td><td className="text-center">48.63</td><td className="text-center">70.5</td><td className="text-center">56.49</td><td className="text-center">71.0</td><td className="text-center">53.5</td></tr>
        <tr><td>ST-S-16*</td><td className="text-center">8</td><td className="text-center">52.93</td><td className="text-center">62.63</td><td className="text-center">46.98</td><td className="text-center">60.34</td><td className="text-center">68.0</td><td className="text-center">59.0</td><td className="text-center">64.5</td><td className="text-center">49.5</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>Mimi-S-24</td><td className="text-center">8</td><td className="text-center">52.71</td><td className="text-center">55.14</td><td className="text-center">50.13</td><td className="text-center">50.61</td><td className="text-center">88.0</td><td className="text-center">76.0</td><td className="text-center">85.5</td><td className="text-center">53.5</td></tr>
        <tr><td>Mimi-S-24*</td><td className="text-center">8</td><td className="text-center">60.45</td><td className="text-center">67.57</td><td className="text-center">51.89</td><td className="text-center">68.41</td><td className="text-center">78.0</td><td className="text-center">77.0</td><td className="text-center">77.5</td><td className="text-center">57.0</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>DWavL-S-16</td><td className="text-center">6</td><td className="text-center">53.95</td><td className="text-center">60.77</td><td className="text-center">50.08</td><td className="text-center">57.56</td><td className="text-center">95.0</td><td className="text-center">69.5</td><td className="text-center">91.0</td><td className="text-center">49.0</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>SQ-SMA-16</td><td className="text-center">4</td><td className="text-center">51.29</td><td className="text-center">51.22</td><td className="text-center">51.41</td><td className="text-center">56.12</td><td className="text-center">83.0</td><td className="text-center">58.5</td><td className="text-center">84.5</td><td className="text-center">48.5</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>WT-SMA-24</td><td className="text-center">1</td><td className="text-center">51.26</td><td className="text-center">53.31</td><td className="text-center">51.25</td><td className="text-center">51.46</td><td className="text-center">82.5</td><td className="text-center">71.0</td><td className="text-center">75.5</td><td className="text-center">50.0</td></tr>
      </tbody>
    </table>
  
            <div className="text-base text-gray-700 dark:text-gray-900 max-w-4xl mx-auto text-left bg-gray-50 p-4 rounded  mt-6">
              <span className="text-xl mr-2">💡</span>
              Our study reveals that semantic and acoustic performance in SLMs varies significantly across tokenizer types. HuBERT remains the strongest performer on semantic tasks, while WavLM leads in acoustic consistency. Semantically distilled tokenizers, particularly those with semantic stream overweighting, showed promising results by narrowing the semantic gap with HuBERT. These gains, however, come with trade-offs, emphasizing the importance of carefully balancing semantic and acoustic objectives. Overall, our findings suggest that, for now, there is no single tokenizer that excels across all spoken and acoustic tasks. </div>
          </div>
        </details>

        {/* Text-to-Speech */}
        <details className="border rounded-lg">
  <summary className="cursor-pointer p-4 bg-purple-100 text-purple-800 font-semibold text-lg">
    🗣️ Text-to-Speech
  </summary>
  <div className="overflow-x-auto p-4 bg-white text-black mt-4">
    <table className="table-auto min-w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="text-left">Tokenizer</th>
      <th>#Q</th>
      <th>UTMOS ↑</th>
      <th>dWER ↓</th>
      <th>SpkSim ↑</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Enc-SMA-24</td>
      <td className="text-center">8</td>
      <td className="text-center">2.31</td>
      <td className="text-center">4.77</td>
      <td className="text-center"><b>0.91</b></td>
    </tr>
    <tr>
      <td>Enc-S-24</td>
      <td className="text-center">8</td>
      <td className="text-center"><b>3.77</b></td>
      <td className="text-center">5.74</td>
      <td className="text-center"><b>0.91</b></td>
    </tr>
    <td colSpan="5"><hr className="border-gray-400 my-1" /></td>
    <tr>
      <td>DAC-SMA-24</td>
      <td className="text-center">8</td>
      <td className="text-center">2.47</td>
      <td className="text-center">11.71</td>
      <td className="text-center">0.88</td>
    </tr>
    <td colSpan="5"><hr className="border-gray-400 my-1" /></td>
    <tr>
      <td>ST-S-16</td>
      <td className="text-center">8</td>
      <td className="text-center">2.91</td>
      <td className="text-center">5.35</td>
      <td className="text-center"><b>0.91</b></td>
    </tr>
    <td colSpan="5"><hr className="border-gray-400 my-1" /></td>
    <tr>
      <td>Mimi-S-24</td>
      <td className="text-center">8</td>
      <td className="text-center">2.60</td>
      <td className="text-center">7.93</td>
      <td className="text-center"><b>0.91</b></td>
    </tr>
    <td colSpan="5"><hr className="border-gray-400 my-1" /></td>
    <tr>
      <td>DWavL-S-16</td>
      <td className="text-center">6</td>
      <td className="text-center"><u>3.42</u></td>
      <td className="text-center"><b>4.32</b></td>
      <td className="text-center"><u>0.90</u></td>
    </tr>
    <td colSpan="5"><hr className="border-gray-400 my-1" /></td>
    <tr>
      <td>WT-SMA-24</td>
      <td className="text-center">1</td>
      <td className="text-center">2.85</td>
      <td className="text-center"><u>4.67</u></td>
      <td className="text-center">0.88</td>
    </tr>
  </tbody>
</table>


    <div className="text-base text-gray-700 dark:text-gray-900 max-w-4xl mx-auto text-left bg-gray-50 p-4 rounded mt-6">
      <span className="text-xl mr-2">💡</span>
      Overall, achieving strong TTS performance with discrete tokenizers remains challenging, especially under constrained training conditions. Training with semantic tokenizers leads to more robust and effective TTS performance compared to acoustic or semantically distilled tokenizers; however, in high-data regimes with deep models, acoustic tokenizers, such as EnCodec, can be competitive with or even outperform semantic ones, particularly if they are trained on similar speech data, such as shown with Enc-S-24 trained on the same LibriTTS dataset as the TTS itself.   </div>
  </div>
</details>

        {/* Audio LM */}
        <details className="border rounded-lg">
  <summary className="cursor-pointer p-4 bg-orange-100 text-orange-800 font-semibold text-lg">
    🔊 Audio LM 
  </summary>
  <div className="overflow-x-auto p-4 bg-white text-black mt-4">
    <table className="table-auto min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th rowSpan="2" className="text-left">Tokenizer</th>
          <th rowSpan="2">#Q</th>
          <th colSpan="3" className="text-center border-l">Text Cond. Gen.</th>
          <th colSpan="3" className="text-center border-l">Uncond. Gen.</th>
          <th colSpan="3" className="text-center border-l">Reconstruction</th>
        </tr>
        <tr>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Enc-SMA-24</td><td className="text-center">8</td><td className="text-center">3.771</td><td className="text-center"><u>1.555</u></td><td className="text-center">.279</td><td className="text-center">5.996</td><td className="text-center"><b>1.897</b></td><td className="text-center">.202</td><td className="text-center">3.806</td><td className="text-center">0.456</td><td className="text-center"><u>.281</u></td></tr>
        <tr><td>Enc-M-32</td><td className="text-center">4</td><td className="text-center">10.11</td><td className="text-center">1.788</td><td className="text-center"><u>.295</u></td><td className="text-center">13.40</td><td className="text-center">2.840</td><td className="text-center">.175</td><td className="text-center">12.611</td><td className="text-center">1.387</td><td className="text-center">.251</td></tr>
        <tr><td>Enc-A-16</td><td className="text-center">4</td><td className="text-center"><b>1.955</b></td><td className="text-center">1.576</td><td className="text-center"><b>.300</b></td><td className="text-center"><b>3.548</b></td><td className="text-center">2.064</td><td className="text-center"><u>.205</u></td><td className="text-center"><b>1.816</b></td><td className="text-center"><u>0.419</u></td><td className="text-center">.273</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>DAC-SMA-44</td><td className="text-center">9</td><td className="text-center">6.929</td><td className="text-center">1.959</td><td className="text-center">.267</td><td className="text-center">6.732</td><td className="text-center"><u>2.041</u></td><td className="text-center"><b>.212</b></td><td className="text-center"><u>2.206</u></td><td className="text-center"><b>0.242</b></td><td className="text-center"><b>.299</b></td></tr>
        <tr><td>DAC-SMA-24</td><td className="text-center">9</td><td className="text-center">7.708</td><td className="text-center">1.966</td><td className="text-center">.253</td><td className="text-center">8.196</td><td className="text-center">2.183</td><td className="text-center">.199</td><td className="text-center">4.124</td><td className="text-center">0.446</td><td className="text-center"><u>.281</u></td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>SQ-SMA-16</td><td className="text-center">4</td><td className="text-center">7.733</td><td className="text-center">3.078</td><td className="text-center">.151</td><td className="text-center">5.977</td><td className="text-center">2.301</td><td className="text-center">.175</td><td className="text-center">3.460</td><td className="text-center">0.460</td><td className="text-center">.268</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>WT-SMA-24</td><td className="text-center">1</td><td className="text-center"><u>2.594</u></td><td className="text-center"><b>1.463</b></td><td className="text-center">.291</td><td className="text-center"><u>4.441</u></td><td className="text-center">2.224</td><td className="text-center">.193</td><td className="text-center">5.018</td><td className="text-center">0.892</td><td className="text-center">.253</td></tr>
      </tbody>
    </table>

    <div className="text-base text-gray-700 dark:text-gray-900 max-w-4xl mx-auto text-left bg-gray-50 p-4 rounded mt-6">
      <span className="text-xl mr-2">💡</span>
      Our findings highlight the critical role of domain-specific training for audio tokenizers. Training the language model alone on in-domain data is not sufficient: tokenizers must also be trained on the same domain to ensure strong performance. Our results also show that the best reconstruction performance does not correlate with the best modeling performance. In the future, we encourage the development of evaluation metrics that disentangle modeling ability from vocoder performance, as is common in the speech domain. We also emphasize the need for more robust modeling metrics.
    </div>
  </div>
</details>

        {/* Music LM */}
        <details className="border rounded-lg">
  <summary className="cursor-pointer p-4 bg-pink-100 text-pink-800 font-semibold text-lg">
  🎵 Music LM
  </summary>
  <div className="overflow-x-auto p-4 bg-white text-black mt-4">
    <table className="table-auto min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th rowSpan="2" className="text-left">Tokenizer</th>
          <th rowSpan="2">#Q</th>
          <th colSpan="3" className="text-center border-l">Text Cond. Gen.</th>
          <th colSpan="3" className="text-center border-l">Uncond. Gen.</th>
          <th colSpan="3" className="text-center border-l">Reconstruction</th>
        </tr>
        <tr>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
          <th className="border-l">FAD ↓</th>
          <th>KLD ↓</th>
          <th>CLAP ↑</th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-semibold text-center"><td colSpan="11" className="bg-gray-50 px-2">MusicCaps</td></tr>
        <tr><td>Enc-SMA-24</td><td className="text-center">8</td><td className="text-center">11.173</td><td className="text-center">2.246</td><td className="text-center">.108</td><td className="text-center">4.632</td><td className="text-center">0.904</td><td className="text-center">.275</td><td className="text-center">2.209</td><td className="text-center">0.259</td><td className="text-center"><b>.358</b></td></tr>
        <tr><td>Enc-M-32</td><td className="text-center">4</td><td className="text-center"><b>4.264</b></td><td className="text-center"><b>2.006</b></td><td className="text-center"><b>.150</b></td><td className="text-center"><b>2.715</b></td><td className="text-center">0.890</td><td className="text-center"><b>.282</b></td><td className="text-center">1.995</td><td className="text-center">0.356</td><td className="text-center">.339</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>DAC-SMA-44</td><td className="text-center">9</td><td className="text-center"><u>8.398</u></td><td className="text-center">2.214</td><td className="text-center"><u>.119</u></td><td className="text-center"><u>3.724</u></td><td className="text-center"><b>0.784</b></td><td className="text-center"><b>.282</b></td><td className="text-center"><b>0.927</b></td><td className="text-center"><b>0.182</b></td><td className="text-center">.340</td></tr>
        <tr><td>DAC-SMA-24</td><td className="text-center">9</td><td className="text-center">9.403</td><td className="text-center"><u>2.127</u></td><td className="text-center">.093</td><td className="text-center">4.001</td><td className="text-center"><u>0.820</u></td><td className="text-center">.277</td><td className="text-center"><u>1.335</u></td><td className="text-center"><u>0.209</u></td><td className="text-center"><b>.358</b></td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>SQ-SMA-16</td><td className="text-center">4</td><td className="text-center">14.211</td><td className="text-center">2.810</td><td className="text-center">.064</td><td className="text-center">5.163</td><td className="text-center">0.979</td><td className="text-center">.270</td><td className="text-center">2.078</td><td className="text-center">0.258</td><td className="text-center">.338</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>WT-SMA-24</td><td className="text-center">1</td><td className="text-center">17.050</td><td className="text-center">2.792</td><td className="text-center">.056</td><td className="text-center">5.550</td><td className="text-center">1.105</td><td className="text-center">.251</td><td className="text-center">1.984</td><td className="text-center">0.414</td><td className="text-center">.336</td></tr>

        <tr className="font-semibold text-center"><td colSpan="11" className="bg-gray-50 px-2">FMA</td></tr>
        <tr><td>Enc-SMA-24</td><td className="text-center">8</td><td className="text-center">15.380</td><td className="text-center">2.161</td><td className="text-center">.059</td><td className="text-center">14.478</td><td className="text-center">1.827</td><td className="text-center">.065</td><td className="text-center">1.013</td><td className="text-center">0.287</td><td className="text-center">.141</td></tr>
        <tr><td>Enc-M-32</td><td className="text-center">4</td><td className="text-center">8.871</td><td className="text-center"><b>1.299</b></td><td className="text-center"><b>.078</b></td><td className="text-center">8.357</td><td className="text-center"><b>1.006</b></td><td className="text-center"><b>.079</b></td><td className="text-center">0.784</td><td className="text-center">0.344</td><td className="text-center"><u>.153</u></td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>DAC-SMA-44</td><td className="text-center">9</td><td className="text-center"><b>8.115</b></td><td className="text-center"><u>1.543</u></td><td className="text-center"><u>.062</u></td><td className="text-center">6.398</td><td className="text-center"><u>1.10</u></td><td className="text-center"><u>.075</u></td><td className="text-center"><b>0.494</b></td><td className="text-center"><b>0.196</b></td><td className="text-center"><b>.158</b></td></tr>
        <tr><td>DAC-SMA-24</td><td className="text-center">9</td><td className="text-center"><u>8.789</u></td><td className="text-center">1.746</td><td className="text-center">.039</td><td className="text-center">7.002</td><td className="text-center">1.405</td><td className="text-center">.043</td><td className="text-center"><u>0.708</u></td><td className="text-center"><u>0.222</u></td><td className="text-center">.125</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>SQ-SMA-16</td><td className="text-center">4</td><td className="text-center">9.248</td><td className="text-center">2.567</td><td className="text-center">.044</td><td className="text-center"><b>3.702</b></td><td className="text-center">1.491</td><td className="text-center">.074</td><td className="text-center">-</td><td className="text-center">-</td><td className="text-center">-</td></tr>
        <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
        <tr><td>WT-SMA-24</td><td className="text-center">1</td><td className="text-center">16.511</td><td className="text-center">1.881</td><td className="text-center">.030</td><td className="text-center">6.890</td><td className="text-center">1.414</td><td className="text-center">.047</td><td className="text-center"><u>0.631</u></td><td className="text-center">0.368</td><td className="text-center">.129</td></tr>
      </tbody>
    </table>

    <div className="text-base text-gray-700 dark:text-gray-900 max-w-4xl mx-auto text-left bg-gray-50 p-4 rounded mt-6">
      <span className="text-xl mr-2">💡</span>
      For music LM, we observe that tokenizers with higher sample rates and multi-codebook, associated with higher bitrates, tend to perform better. This contrasts with audio and speech generation, where higher bitrate tokenizers were harder to model. We hypothesize that music, with its complex harmonic and temporal structure, benefits more from detailed representations, whereas such granularity may be excessive or less critical for general audio tasks. Additionally, unconditional generation consistently outperforms text-conditioned generation, emphasizing the benefits of providing melody prompts in music generation tasks.
    </div>
  </div>
</details>
      </div>

      {/* Back button */}
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
