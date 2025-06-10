import React from 'react';

const coreContributors = [
  { name: 'Pooneh Mousavi', affiliation: 'Concordia University, Mila', website: 'https://poonehmousavi.github.io' },
  { name: 'Gallil Maimon', affiliation: 'The Hebrew University of Jerusalem', website: 'https://pages.cs.huji.ac.il/gallilmaimon/' },
  { name: 'Adel Moumen', affiliation: 'University of Cambridge', website: 'https://adel-moumen.github.io/' },
  { name: 'Darius Petermann', affiliation: 'Indiana University', website: 'https://www.dariuspetermann.com/' },
  { name: 'Jiatong Shi', affiliation: 'Carnegie Mellon University', website: 'http://shijt.site/' },
  { name: 'Haibin Wu', affiliation: 'Microsoft', website: 'https://hbwu-ntu.github.io/' },
  { name: 'Haici Yang', affiliation: 'Indiana University', website: 'https://haiciyang.github.io/resume.html' },
  { name: 'Anastasia Kuznetsova', affiliation: 'Indiana University', website: 'https://ana-kuznetsova.github.io/' },
];

const otherCollaborators = [
  { name: 'Artem Ploujnikov', affiliation: 'Université de Montréal, Mila', website: 'https://mila.quebec/en/directory/artem-ploujnikov' },
  { name: 'Ricard Marxer', affiliation: 'Université de Toulon', website: 'https://www.ricardmarxer.com' },
  { name: 'Bhuvana Ramabhadran', affiliation: 'Google', website: 'https://sites.google.com/view/bhuvana-ramabhadran/home' },
  { name: 'Benjamin Elizalde', affiliation: 'Apple', website: 'https://bmartin1.github.io/' },
  { name: 'Loren Lugosch', affiliation: 'Apple', website: 'https://lorenlugosch.github.io/' },
  { name: 'Jinyu Li', affiliation: 'Microsoft', website: 'https://www.microsoft.com/en-us/research/people/jinyli/' },
  { name: 'Cem Subakan', affiliation: 'Laval University, Mila', website: 'https://ycemsubakan.github.io/' },
  { name: 'Phil Woodland', affiliation: 'University of Cambridge', website: 'https://mi.eng.cam.ac.uk/~pcw/' },
  { name: 'Minje Kim', affiliation: 'University of Illinois at Urbana-Champaign', website: 'https://minjekim.com/' },
  { name: 'Hung-yi Lee', affiliation: 'National Taiwan University', website: 'https://speech.ee.ntu.edu.tw/~hylee' },
  { name: 'Shinji Watanabe', affiliation: 'Carnegie Mellon University', website: 'https://sites.google.com/view/shinjiwatanabe' },
  { name: 'Yossi Adi', affiliation: 'The Hebrew University of Jerusalem', website: 'https://www.cs.huji.ac.il/~adiyoss/' },
  { name: 'Mirco Ravanelli', affiliation: 'Concordia University, Mila', website: 'https://sites.google.com/site/mircoravanelli/' },
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
    <h3 className="text-2xl font-semibold text-left text-white-800 mb-4">Collaborators</h3>
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
    <h3 className="text-xl font-semibold text-white-800 mb-4">Affiliations</h3>
    <div className="flex flex-wrap justify-center items-center gap-6">
      {[
        'mila.png',
        'cambridge.png',
        'cmu.png',
        'ntu.png',
        'uiuc.png',
        'google.png',
        'Indiana.png',
        'concordia.png',
        'microsoft.png',
        'apple.svg',
        'utln.png',
        'hebrew.png',
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
