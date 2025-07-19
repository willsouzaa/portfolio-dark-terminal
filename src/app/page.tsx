// src/app/page.tsx
"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import TypewriterClient from "./components/TypewriterClient";
import HackerTerminal from "./components/Terminal"; // aqui é seu terminal real

export default function Home() {
  const fakeIP = "192.168.1.13";
  const os = "Kali GNU/Linux Rolling";
  const kernel = "Linux 6.7.9-amd64";
  const username = "pauloamancio";

  return (
    <>
      <Navbar />

      <div className="font-mono bg-black text-green-400 min-h-screen p-6 sm:p-12 space-y-10">
  {/* Apresentação */}
  <div className="bg-black border-l-4 border-green-600 pl-5">
    <p className="text-sm text-green-500">$ nome</p>
    <h1 className="ml-4 text-2xl sm:text-3xl font-bold text-green-300">Paulo Amancio</h1>
  </div>

  {/* Profissão */}
  <div className="bg-black border-l-4 border-green-600 pl-5">
    <p className="text-sm text-green-500">$ profissão</p>
    <p className="ml-4 text-lg">Desenvolvedor Full Stack & Especialista em Segurança da Informação</p>
  </div>

      {/* Sobre mim */}
<div className="text-green-400 text-xl sm:text-2xl border-t border-green-700 pt-6 space-y-3">
  <span className="block mb-2 text-green-300">$ echo "Sobre mim"</span>
  <p className="ml-4 text-base sm:text-lg text-green-200 leading-relaxed">
    Profissional de tecnologia com foco em Desenvolvimento Full Stack e Segurança da Informação, atuando como Técnico de Informática e concluindo a graduação na Estácio.
  </p>
  <p className="ml-4 text-base sm:text-lg text-green-200 leading-relaxed">
    Aprovado no concurso da Marinha para Processamento de Dados, possuo experiência prática em DevSecOps, JavaScript, Node.js, React, MongoDB e ferramentas de cibersegurança.
  </p>
</div>


{/* Typewriter animado */}
<div className="text-lg sm:text-xl font-mono mt-6">
  <TypewriterClient />
</div>


      {/* Contato rápido */}
<div className="border-t border-green-700 pt-6">
  <p className="text-green-300 text-sm mb-2">$ contato</p>
  <ul className="ml-4 space-y-1 text-green-200 text-base">
    <li>
      📧 Email: <a href="mailto:pauloamancio79@gmail.com" className="underline hover:text-green-400 transition">pauloamancio79@gmail.com</a>
    </li>
    <li>
      💻 GitHub: <a href="https://github.com/willsouzaa" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400 transition">https://github.com/willsouzaa</a>
    </li>
    <li>
      🔗 LinkedIn: <a href="www.linkedin.com/in/paulo-amancio" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400 transition">www.linkedin.com/in/paulo-amancio</a>
    </li>
    <li>
      📱 WhatsApp: <a href="https://wa.me/55489988405365" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400 transition">+55 48 98840-5365</a>
    </li>
  </ul>
</div>


        {/* Terminal interativo */}
        <div className="border-t border-green-700 pt-6">
          <p className="text-green-300 text-sm mb-2">$ terminal interativo</p>
          <HackerTerminal />
        </div>

       <footer className="pt-12 text-center text-sm text-green-700 border-t border-green-800">
  Portfólio inspirado em terminais Linux — Conectando tecnologia e segurança
</footer>
      </div>
    </>
  );
}
