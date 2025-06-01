/* src/components/Footer.jsx */
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dodgers text-white py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Half Full. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Discord</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;