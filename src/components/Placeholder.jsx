import React from 'react';

export default function Placeholder({ name }) {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">{name} Page Coming Soon!</h2>
      <p className="text-gray-400">We are working on adding interactive content here. Stay tuned!</p>
    </div>
  );
}
