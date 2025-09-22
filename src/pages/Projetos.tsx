import React from 'react';
import { motion } from 'framer-motion';
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
    ];

    return (
        <motion.section
            id="projetos"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="rounded-3xl border border-blue-800/30 bg-slate-950/60 p-10 shadow-[0_55px_110px_-65px_rgba(59,130,246,0.85)] backdrop-blur"
        >
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-blue-400/70">Projetos em destaque</p>
                    <h2 className="mt-2 text-4xl font-semibold text-blue-100">Projetos</h2>
                </div>
                <span className="text-sm text-slate-300/80">Explorando desafios reais com tecnologia moderna</span>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                            url={project.url}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projetos;
