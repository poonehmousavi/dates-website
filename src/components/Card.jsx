import React from 'react';

export default function Card({ title, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transform transition-transform hover:scale-105 rounded-xl shadow-lg p-6 h-40 flex items-center justify-center text-white font-semibold text-xl bg-gradient-to-r ${color}`}
    >
      {title}
    </div>
  );
}
