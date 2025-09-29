import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    techs: string[];
    /** Link do deploy (backward compat: usa `url` se `liveUrl` não vier) */
    url?: string;
    liveUrl?: string;
    /** Link do código fonte (opcional) */
    codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techs, url, liveUrl, codeUrl }) => {
    const live = liveUrl ?? url;

    return (
        <motion.div
            className="group block h-full"
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            <div className="flex h-full flex-col rounded-2xl border border-blue-800/40 bg-slate-950/80 p-6 shadow-[0_30px_60px_-45px_rgba(59,130,246,0.9)] transition-all duration-300 group-hover:border-blue-500/70 group-hover:bg-slate-900/80 group-hover:shadow-[0_35px_75px_-45px_rgba(59,130,246,0.95)]">
                <h3 className="text-2xl font-semibold text-blue-100 transition-colors group-hover:text-blue-300">{title}</h3>
                <p className="mt-3 text-sm text-slate-300">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-md border border-blue-800/50 bg-blue-950/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-100/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                            aria-label={`Abrir projeto ${title}`}
                        >
                            Ver Projeto
                            <span aria-hidden className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    )}
                    {codeUrl && (
                        <a
                            href={codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                            aria-label={`Ver código do projeto ${title}`}
                        >
                            Ver Código
                            <span aria-hidden className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
