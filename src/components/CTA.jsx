/* src/components/CTA.jsx */
import React from 'react';

function CTA() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-dodgers">Get Involved</h2>
      <p className="mt-4 text-lg">Become a member or support our mission today.</p>
      <div className="mt-8 space-x-4">
        <button className="bg-dodgers text-white px-6 py-3 rounded-md hover:bg-blue-700">Become a Member</button>
        <button className="border border-dodgers text-dodgers px-6 py-3 rounded-md hover:bg-dodgers hover:text-white">Donate</button>
      </div>
    </section>
  );
}

export default CTA;