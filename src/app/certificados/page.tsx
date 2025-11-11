// src/app/certificados/page.tsx
import CertificadosClient from "./CertificadosClient";

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

      <CertificadosClient certificados={certificados} />
    </main>
  );
}
