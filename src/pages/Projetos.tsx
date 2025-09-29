import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

type Project = {
    title: string;
    description: string;
    techs: string[];
    url?: string; // deploy
    liveUrl?: string; // alias para deploy
    codeUrl?: string; // repositório
};

const Projetos: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Trybe Tunes",
            description:
                "App React para buscar álbuns, ouvir prévias, favoritar músicas e editar perfil — tema escuro e layout responsivo.",
            techs: ["React", "React Router", "CSS", "Vercel"],
            url: "https://project-tunes.vercel.app/",
            codeUrl: "https://github.com/DanielGomes25/Project-Tunes",
        },
        {
            title: "Ride Booking System",
            description:
                "Sistema conceito para reservar viagens, escolher motoristas disponíveis e visualizar o histórico de viagens.",
            techs: ["Node.js", "TypeScript", "Fastify", "Prisma", "React", "Postgres"],
            codeUrl: "https://github.com/DanielGomes25/Project-Ride-Booking-System",
        },
        {
            title: "Cartão Fono Life",
            description:
                "Site institucional em produção desenvolvido para cliente. Código privado; link direciona ao produto em produção.",
            techs: [],
            url: "https://www.cartaofonolife.com.br/",
        },

    ];

    return (
        <motion.section
            id="projetos"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="p-2"
        >
            <div className="mb-10 text-center">
                <h2 className="mt-2 text-4xl font-semibold text-slate-900">Projetos</h2>
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
                            codeUrl={project.codeUrl}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projetos;
