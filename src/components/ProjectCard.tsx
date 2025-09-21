import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    techs: string[];
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techs, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="group h-full p-6 bg-neutral-900 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400">{title}</h3>
                <p className="mt-3 text-neutral-300 text-sm">{description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <span key={index} className="rounded-md bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-6 text-sm text-blue-400">Ver Projeto</div>
            </div>
        </a>
    );
};

export default ProjectCard;
