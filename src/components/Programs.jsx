/* src/components/Programs.jsx */
import React from 'react';

function Programs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-dodgers">Our Programs</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="text-6xl">🎮</div>
            <h3 className="mt-4 text-2xl font-semibold">Gaming Therapy</h3>
            <p className="mt-2">Using interactive games to foster cognitive and emotional healing.</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-6xl">🧠</div>
            <h3 className="mt-4 text-2xl font-semibold">Mental Health Resources</h3>
            <p className="mt-2">Providing access to counseling and support tools.</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-6xl">🤝</div>
            <h3 className="mt-4 text-2xl font-semibold">Peer Support</h3>
            <p className="mt-2">Building a network of fellow veterans and allies.</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-6xl">🎨</div>
            <h3 className="mt-4 text-2xl font-semibold">Creative Outlets</h3>
            <p className="mt-2">Offering workshops for art, writing, and music therapy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;