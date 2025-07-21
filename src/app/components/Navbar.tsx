'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-6 py-4 text-green-400 font-mono border-b border-green-800">
      <div className="flex justify-between items-center">
        {/* Menu (esquerda) */}
        <div className="flex items-center gap-6">
          {/* Botão hambúrguer (mobile) */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          {/* Links (desktop) */}
          <div className="hidden sm:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/certificados">Certificados</Link>
            <Link href="/projects">Projetos</Link>
            <Link href="/tools">*Ferramentas Open Source*</Link>
          </div>
        </div>

        {/* Logo (direita) */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo Paulo Amancio"
            width={100}
            height={100}
            className="rounded"
          />
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="mt-3 flex flex-col gap-3 sm:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/certificados" onClick={() => setIsOpen(false)}>Certificados</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projetos</Link>
          <Link href="/tools" onClick={() => setIsOpen(false)}>*Ferramentas Open Source*</Link>
        </div>
      )}
    </nav>
  );
}
