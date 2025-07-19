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
    screenshot: '/images/projeto1.png', // ✅ Coloque a imagem em public/screenshots/
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
