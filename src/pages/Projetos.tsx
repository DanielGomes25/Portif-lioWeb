import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projetos: React.FC = () => {
    const projects = [
        {
            title: "Projeto 1 — SaaS de Tarefas",
            description: "Aplicação full-stack com autenticação, CRUD e billing.",
            techs: ["React", "Node.js", "TypeScript", "Stripe"],
            url: "https://exemplo1.com"
        },
        {
            title: "Projeto 2 — E-commerce Headless",
            description: "Catálogo de produtos, carrinho de compras e checkout headless.",
            techs: ["Next.js", "Node", "Prisma", "Stripe"],
            url: "https://exemplo2.com"
        },
        // Adicione mais projetos conforme necessário
    ];

    return (
        <section id="projetos" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        techs={project.techs}
                        url={project.url}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projetos;
