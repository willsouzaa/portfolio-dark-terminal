"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Certificado = {
  titulo: string;
  emissor: string;
  ano: string;
  link?: string;
  image?: string;
};

export default function CertificadosClient({ certificados }: { certificados: Certificado[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificados.map((cert, index) => (
          <div key={index} className="bg-zinc-900 border border-green-600 rounded-lg overflow-hidden shadow-md hover:shadow-green-400 transition">
            {cert.image && (
              <button
                type="button"
                onClick={() => setSelectedImage(cert.image ?? null)}
                className="w-full h-48 relative block"
                aria-label={`Abrir imagem do certificado ${cert.titulo}`}
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={cert.image}
                    alt={`Imagem do certificado ${cert.titulo}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[95vw] h-[85vh] sm:w-[80vw] sm:h-[80vh] lg:w-[70vw] lg:h-[80vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 bg-zinc-900/80 text-green-200 rounded px-2 py-1"
              aria-label="Fechar visualização"
            >
              ✕
            </button>

            <div className="w-full h-full relative rounded">
              <Image src={selectedImage} alt="Visualização do certificado" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
