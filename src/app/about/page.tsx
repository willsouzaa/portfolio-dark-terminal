export default function About() {
  return (
    <main className="min-h-screen p-8 bg-black text-green-400 font-mono">
      <h1 className="text-4xl mb-8">Sobre mim</h1>
      <section className="mb-12">
        <p>Olá, sou Paulo Amancio, DevSecOps e Full Stack, apaixonado por segurança da informação...</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">Certificados</h2>
        <ul className="list-disc ml-6">
          <li>Certificado AWS Solutions Architect</li>
          <li>CEH - Certified Ethical Hacker</li>
          <li>Curso de Injetáveis - Academia Biomédica</li>
          {/* Liste os seus certificados reais aqui */}
        </ul>
      </section>
    </main>
  );
}
