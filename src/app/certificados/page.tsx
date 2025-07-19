// src/app/certificados/page.tsx
import Image from "next/image";
import Link from "next/link";

type Certificado = {
  titulo: string;
  emissor: string;
  ano: string;
  link?: string;
  image?: string; // ✅ nova propriedade para imagem
};

const certificados: Certificado[] = [
  {
    titulo: "Graduaçao Desenvolvimento Full stack",
    emissor: "Faculdade Estácio",
    ano: "2025",
    image: "/certificados/faculdade.jpg", // 🖼️ coloque suas imagens na pasta public/certificados
  },
];

export default function Certificados() {
  return (
    <main className="min-h-screen p-6 sm:p-10 bg-black text-green-400 font-mono">
      <h1 className="text-3xl sm:text-4xl mb-8 border-b border-green-600 pb-2">📜 Certificados & Diplomas</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificados.map((cert, index) => (
          <div key={index} className="bg-zinc-900 border border-green-600 rounded-lg overflow-hidden shadow-md hover:shadow-green-400 transition">
            {cert.image && (
              <Image
                src={cert.image}
                alt={`Imagem do certificado ${cert.titulo}`}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
            )}

            <div className="p-4 space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-green-300">{cert.titulo}</h2>
              <p className="text-sm text-green-500">{cert.emissor} — {cert.ano}</p>
              {cert.link && (
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-green-400 hover:text-green-300"
                >
                  Ver certificado →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
