import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  screenshot?: string; // Ex: "/images/projeto1.png"
};

export default function ProjectCard({
  title,
  description,
  tags,
  repo,
  demo,
  screenshot,
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 border border-green-600 rounded-lg overflow-hidden shadow-md hover:shadow-green-400 transition flex flex-col">
      {/* Imagem do projeto */}
      {screenshot ? (
        <div className="relative w-full h-48">
          <Image
            src={screenshot}
            alt={`Preview do projeto ${title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-green-950 flex items-center justify-center text-green-500 text-sm">
          Sem imagem disponível
        </div>
      )}

      {/* Conteúdo */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-green-300">{title}</h3>
          <p className="text-sm text-green-200 mt-1">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-green-400 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline hover:text-green-400 transition"
            >
              <FaGithub className="text-green-400" />
              Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline hover:text-green-400 transition"
            >
              <FaExternalLinkAlt className="text-green-400" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
