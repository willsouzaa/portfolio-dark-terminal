export default function Contact() {
  return (
    <main className="p-4 sm:p-8 min-h-screen bg-black text-green-200 font-mono">
      <p className="text-green-400 text-sm sm:text-lg mb-6">&gt; ping pauloamancio.dev</p>

      <div className="grid gap-4 sm:gap-5 text-sm sm:text-base">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-green-300 whitespace-nowrap">📧 Email:</span>
          <a
            href="mailto:pauloamancio79@gmail.com"
            className="underline hover:text-green-400 transition break-all"
          >
            pauloamancio79@gmail.com
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-green-300 whitespace-nowrap">💻 GitHub:</span>
          <a
            href="https://github.com/pauloamancio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 transition break-all"
          >
            github.com/pauloamancio
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-green-300 whitespace-nowrap">🔗 LinkedIn:</span>
          <a
            href="https://linkedin.com/in/paulo-amancio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 transition break-all"
          >
            linkedin.com/in/paulo-amancio
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-green-300 whitespace-nowrap">📱 WhatsApp:</span>
          <a
            href="https://wa.me/55489988405365"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 transition break-all"
          >
            +55 48 98840-5365
          </a>
        </div>
      </div>
    </main>
  );
}
