'use client';

import Terminal from 'react-console-emulator';

interface TerminalInstance {
  clearStdout: () => void;
}

const commands = {
  about: {
    description: 'Informações sobre mim',
    usage: 'about',
    fn: () =>
      'Paulo Amancio — DevSecOps | Segurança da Informação | Full Stack',
  },
  projects: {
    description: 'Lista de projetos',
    usage: 'projects',
    fn: () =>
      'Projetos disponíveis em: /projects ou digite "open projects"',
  },
  contact: {
    description: 'Informações de contato',
    usage: 'contact',
    fn: () =>
      'Email: pauloamancio79@gmail.com | GitHub: @willsouzaa',
  },
  cls: {
    description: 'Alias para clear (limpa o terminal)',
    usage: 'cls',
    fn: function (this: TerminalInstance) {
      this.clearStdout();
      return '';
    },
  },
  open: {
    description: 'Abre uma rota do site (ex: open projects)',
    usage: 'open [rota]',
    fn: function (this: TerminalInstance, path?: string) {
      if (!path) return 'Uso: open [rota]';
      window.location.href = `/${path}`;
      return `Abrindo /${path}...`;
    },
  },
};

export default function HackerTerminal() {
  return (
    <div className="mt-10 w-full max-w-3xl mx-auto">
      <Terminal
        commands={commands}
        promptLabel={'root@paulo:~$'}
        welcomeMessage={'Bem-vindo ao terminal. Digite "help" para ver os comandos disponíveis.'}
      />
    </div>
  );
}
