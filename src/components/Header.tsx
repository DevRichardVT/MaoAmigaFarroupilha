"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Parceiros', href: '/parceiros' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Doações', href: '/doacoes' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/Logo.avif" alt="Mão Amiga Farroupilha" className="h-12 w-auto object-contain" />
            <span className="text-2xl font-bold text-primary tracking-tight hidden sm:block">
              Mão Amiga Farroupilha
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors ${
                  isActive 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/maoamigafarroupilha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors p-2"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://www.facebook.com/maoamigafarroupilha/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors p-2"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>
      
      {/* Mobile Menu (simplified) */}
      <div className="md:hidden border-t border-gray-100 py-3 px-4 flex justify-center gap-4 text-xs font-medium overflow-x-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-colors px-3 py-1.5 rounded-full ${
                isActive 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};
