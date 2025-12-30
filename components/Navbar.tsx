"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="gradient-bg text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <div className="relative h-12 w-auto mr-2">
            <Image 
            src="/images/Logo.png" 
            alt="HGS Logo" 
            width={64} 
            height={64} 
            className="h-16 w-auto object-contain" 
            priority />
          </div>
          <span className="hidden sm:inline text-white">HEMA GLORI SEJAHTERA</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-200 font-mediumRP transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hg-dark mt-4 rounded-lg shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-hg-red transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}