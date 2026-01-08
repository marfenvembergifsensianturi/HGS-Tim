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
    <header className="gradient-bg text-white py-3 md:py-4 px-4 md:px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Bagian Logo dan Nama PT */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="logo flex-shrink-0">
            <Image 
              src="/images/Logo.png" 
              alt="HGS Logo" 
              width={64} 
              height={64} 
              className="h-10 w-auto md:h-16 object-contain" 
              priority 
            />
          </div>
          {/* - text-sm: Ukuran kecil di mobile
            - sm:text-base: Ukuran sedang di HP yang agak lebar
            - md:text-2xl: Ukuran besar di desktop
            - whitespace-nowrap: Memaksa teks tetap 1 baris
          */}
          <span className="font-bold text-sm sm:text-base md:text-2xl tracking-tight whitespace-nowrap">
            HEMA GLORI SEJAHTERA
          </span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-200 font-medium transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-2xl p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hg-dark mt-3 rounded-lg shadow-xl animate-fade-in overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="block px-4 py-3 rounded-md text-base font-medium hover:bg-hg-red transition"
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