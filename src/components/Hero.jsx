/* src/components/Hero.jsx */
import React from 'react';

function Hero() {
  return (
    <section className="bg-dodgers text-white h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-5xl font-bold">Half Full</h1>
        <p className="mt-4 text-xl">with hope & heart</p>
        <button className="mt-8 bg-white text-dodgers font-semibold px-6 py-3 rounded-md hover:bg-gray-100">
          Join the Mission
        </button>
      </div>
    </section>
  );
}

export default Hero;