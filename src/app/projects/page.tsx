// src/app/projects/page.tsx

import ProjectCard from '../components/ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  screenshot?: string;
};

const projects: Project[] = [
  {
    id: 'secure-dockerfile',
    title: 'Rancho Bellevue',
    description: 'Site desenvolvido com HTML5, CSS3, Bootstrap e JavaScript, focando em responsividade, design elegante e navegação fluida. Utiliza ícones da Bootstrap Icons, vídeo em múltiplos formatos, e estrutura otimizada para performance e SEO.',
    tags: ['JavaScript', 'Bootstrap', 'CSS3'],
    repo: 'https://github.com/willsouzaa/Site-Rancho-BelleVue',
    demo: 'https://ranchobellevue.com.br',
    screenshot: '/images/projeto1.png',
  },
  {
    id: 'secure-dockerfile',
    title: 'Barbearia Medeiros',
    description: 'Site desenvolvido com React, CSS3 e React Router, focando em navegação fluida, experiência responsiva e arquitetura de componentes reutilizáveis. Integra a Google Maps API para exibição da localização, e possui estrutura modular otimizada para desempenho, escalabilidade e organização do código.',
    tags: ['React', 'CSS', 'React Router', 'Google Maps API'],
    repo: 'https://github.com/willsouzaa/Medeiros-Barbearia.git',
    demo: 'https://barbeariamedeiros.com.br/',
    screenshot: '/images/projeto2.jpg',
  },
  // Adicione outros projetos aqui
];

export default function Projects() {
  return (
    <main className="min-h-screen p-8 bg-black text-green-400 font-mono">
      <h1 className="text-3xl sm:text-4xl mb-8 border-b border-green-600 pb-2">
        💻 Meus Projetos
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
