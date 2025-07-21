// src/app/tools/page.tsx
"use client";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6 sm:p-12 space-y-10">
      <h1 className="text-3xl sm:text-4xl text-green-300 font-bold border-b border-green-700 pb-2">
        🛠️ Ferramentas Open Source
      </h1>

      <p className="text-lg text-green-200">
        Aqui estão algumas ferramentas que desenvolvi. Todas são de código aberto e disponíveis no meu GitHub.
      </p>

      <div className="space-y-6">
        {/* Exemplo de ferramenta */}
        <div className="border-l-4 border-green-600 pl-4">
          <h2 className="text-xl font-semibold text-green-300">🧠 Gerador de Senhas Fortes</h2>
          <p className="text-green-200">Uma ferramenta para gerar senhas seguras com letras, números e símbolos.</p>
          <a
            href="https://github.com/willsouzaa/gerador-senhas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline hover:text-green-300"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Você pode repetir esse bloco para cada ferramenta nova */}
      </div>
    </div>
  );
}
