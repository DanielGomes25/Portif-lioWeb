import React from 'react';
import { motion } from 'framer-motion';

const Sobre: React.FC = () => {
    return (
        <motion.section
            id="sobre"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="rounded-3xl border border-blue-800/30 bg-slate-950/60 p-10 shadow-[0_45px_95px_-55px_rgba(59,130,246,0.8)] backdrop-blur"
        >
            <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-400/70">Apresentação</p>
                <h2 className="mt-2 text-4xl font-semibold text-blue-100">Sobre mim</h2>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto,1fr]">
                {/* Foto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-blue-900/50 shadow-[0_25px_65px_-35px_rgba(59,130,246,0.9)] md:h-40 md:w-40"
                >
                    <img
                        src="/daniel.jpeg"
                        alt="Foto de Daniel Gomes de Paula"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Texto */}
                <div>
                    <p className="mb-4 text-slate-300">
                        🚀 Sou desenvolvedor Full Stack com experiência prática em desenvolvimento web utilizando React, Node.js e TypeScript.
                        Atualmente, estou expandindo minha atuação para o ecossistema Salesforce, com foco em Agentforce, Experience Cloud e Administração,
                        aplicando conceitos de fluxos, bibliotecas de dados e automações.
                    </p>
                    <p className="mb-6 text-slate-300">
                        Estou cursando Engenharia de Software, unindo fundamentos acadêmicos com práticas modernas do mercado. Tenho perfil voltado à
                        resolução de problemas, colaboração em times ágeis e criação de soluções escaláveis.
                    </p>

                    <h3 className="text-xl font-semibold text-blue-100">💡 Habilidades principais</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {[
                            'Salesforce (Agentforce, Experience Cloud)',
                            'Fluxos e automações',
                            'React',
                            'Node.js',
                            'TypeScript',
                            'Python',
                            'SCRUM',
                            'Git/GitHub',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md border border-blue-800/40 bg-blue-950/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-100/80"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-blue-100">🎯 Objetivo profissional</h3>
                    <p className="text-slate-300">
                        Contribuir para projetos inovadores em empresas que utilizam tecnologia como motor de transformação, aplicando minhas habilidades
                        técnicas e conhecimento em Salesforce para gerar impacto e eficiência.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Sobre;
