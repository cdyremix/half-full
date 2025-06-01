/* src/components/Community.jsx */
import React from 'react';

function Community() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-dodgers">Community Preview</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder images */}
          <div className="h-48 bg-gray-300 rounded-lg"></div>
          <div className="h-48 bg-gray-300 rounded-lg"></div>
          <div className="h-48 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

export default Community;