import React from 'react';

const coreContributors = [
  { name: 'Pooneh Mousavi', affiliation: 'Mila', website: 'https://poonehmousavi.github.io' },
  { name: 'Jiatong Shi', affiliation: 'CMU', website: 'http://shijt.site/' },
  { name: 'Haibin Wu', affiliation: 'National Taiwan University', website: 'https://hbwu-ntu.github.io/' },
  { name: 'Haici Yang', affiliation: 'UIUC', website: 'https://haiciyang.github.io/resume.html' },
  { name: 'Anastasia Kuznetsova', affiliation: 'UIUC', website: 'https://ana-kuznetsova.github.io/' },
  { name: 'Darius Petermann', affiliation: 'UIUC', website: 'https://www.dariuspetermann.com/' },
  { name: 'Adel Moumen', affiliation: 'University of Cambridge', website: 'https://adel-moumen.github.io/' },
  { name: 'Gallil Maimon', affiliation: 'Hebrew University', website: 'https://pages.cs.huji.ac.il/gallilmaimon/' },
];

const otherCollaborators = [
  { name: 'Artem Ploujnikov', affiliation: 'Mila', website: 'https://mila.quebec/en/directory/artem-ploujnikov' },
  { name: 'Cem Subakan', affiliation: 'Mila', website: 'https://ycemsubakan.github.io/' },
  { name: 'Mirco Ravanelli', affiliation: 'Mila', website: 'https://sites.google.com/site/mircoravanelli/' },
  { name: 'Phil Woodland', affiliation: 'University of Cambridge', website: 'https://mi.eng.cam.ac.uk/~pcw/' },
  { name: 'Shinji Watanabe', affiliation: 'CMU', website: 'https://sites.google.com/view/shinjiwatanabe' },
  { name: 'Hung-yi Lee', affiliation: 'National Taiwan University', website: 'https://speech.ee.ntu.edu.tw/~hylee' },
  { name: 'Minje Kim', affiliation: 'UIUC', website: 'https://sites.google.com/site/minjekimpublicsite' },
  { name: 'Bhuvana Ramabhadran', affiliation: 'Google', website: 'https://sites.google.com/view/bhuvana-ramabhadran/home' },
  { name: 'Yossi Adi', affiliation: 'Meta AI / Hebrew University', website: 'https://www.cs.huji.ac.il/~adiyoss/' },
  { name: 'Jinyu Li', affiliation: 'Microsoft', website: 'https://www.microsoft.com/en-us/research/people/jinyli/' },
  { name: 'Loren Lugosch', affiliation: 'Apple', website: 'https://lorenlugosch.github.io/' },
  { name: 'Benjamin Elizalde', affiliation: 'Apple', website: 'https://bmartin1.github.io/' },
  { name: 'Ricard Marxer', affiliation: 'Université de Toulon', website: 'https://www.ricardmarxer.com' },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
  {/* Header with Icon */}
  <div className="flex flex-col items-center justify-center gap-4 mb-6">
  <img
    src={`${import.meta.env.BASE_URL}/team1.png`}
    alt="Team Icon"
    className="w-20 h-20"
  />
  <h2 className="text-4xl font-bold text-primary">Meet the Team</h2>
</div>

  {/* Core Contributors */}
  <div>
    <h3 className="text-2xl font-semibold text-left text-blue-700 mb-4">Core Contributors</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {coreContributors.map((member, index) => (
        <div
          key={index}
          className="bg-white text-black border border-gray-200 shadow p-4 rounded-lg hover:shadow-md transition"
        >
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-800 hover:underline"
          >
            {member.name}
          </a>
          <div className="text-sm text-gray-700">{member.affiliation}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Other Collaborators */}
  <div>
    <h3 className="text-2xl font-semibold text-left text-gray-800 mb-4">Collaborators</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {otherCollaborators.map((collab, index) => (
        <div
          key={index}
          className="bg-white text-black border border-gray-200 shadow p-4 rounded-lg hover:shadow-md transition"
        >
          <a
            href={collab.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-800 hover:underline"
          >
            {collab.name}
          </a>
          <div className="text-sm text-gray-700">{collab.affiliation}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Logos */}
  <div className="text-center pt-10">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Affiliations</h3>
    <div className="flex flex-wrap justify-center items-center gap-6">
      {[
        'mila.png',
        'cambridge.png',
        'cmu.png',
        'ntu.png',
        'uiuc.png',
        'google.png',
        'concordia.png',
        'microsoft.png',
        'apple.svg',
        'toulon.png',
        'hebrew.png',
        'meta.png',
        'udem.png',
        'ulaval.png',
      ].map((logo, idx) => (
        <img
          key={idx}
          src={`${import.meta.env.BASE_URL}logos/${logo}`}
          alt={logo.replace(/\.(png|svg)/, '')}
          className="h-10"
          onError={(e) => (e.target.style.display = 'none')}
        />
      ))}
    </div>
  </div>
</div>
  );


}
