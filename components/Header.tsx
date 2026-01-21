"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#desafio", label: "El Desafío" },
  { href: "#programa", label: "Programa" },
  { href: "#agenda", label: "Agenda" },
  { href: "#alianzas", label: "Alianzas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-brutal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo ClimateFest"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="flex flex-col m-0 p-0 font-extrabold">
              <span className="text-xl md:text-2xl font-bold text-[#4caf2f] leading-[0.8]">
                CLIMATE
              </span>
              <span className="text-xl md:text-2xl font-bold text-[#1e2845] leading-[0.8]">
                FEST
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1e2845] hover:text-[#4caf2f] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscribete"
              className="bg-[#4caf2f] text-white px-6 py-2 border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all font-bold"
            >
              INSCRÍBETE
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-black bg-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#1e2845]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1e2845]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t-2 border-black py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[#1e2845] hover:text-[#4caf2f] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscribete"
              className="block bg-[#4caf2f] text-white px-6 py-3 border-2 border-black shadow-brutal font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              INSCRÍBETE
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
