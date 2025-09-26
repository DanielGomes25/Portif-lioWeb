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
            className="p-2"
        >
            <div className="mb-14 sm:mb-16 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Apresentação</p>
                <h2 className="mt-2 text-4xl font-semibold text-slate-900">Sobre mim</h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:justify-items-center">
                {/* Foto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative mx-auto md:mx-auto h-52 w-52 overflow-hidden rounded-full ring-4 ring-slate-200 shadow-[0_15px_35px_-20px_rgba(2,6,23,0.25)] md:h-72 md:w-72 lg:h-80 lg:w-80 md:justify-self-center"
                >
                    <img
                        src="/daniel.jpeg"
                        alt="Foto de Daniel Gomes de Paula"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Texto */}
                <div className="md:col-start-2 md:justify-self-center w-full max-w-2xl">
                    <div className="rounded-2xl border border-blue-900/30 bg-gradient-to-br from-slate-950 to-blue-950 p-8 shadow-[0_35px_75px_-45px_rgba(30,64,175,0.55)]">
                        <p className="mb-4 text-slate-200">
                            🚀 Sou desenvolvedor full stack com conhecimento em React, Node.js, TypeScript e Python. Tenho experiência construindo interfaces acessíveis e
                            APIs escaláveis. Hoje aprofundo conhecimentos no ecossistema Salesforce — com ênfase em Administração, Agentforce e Experience
                            Cloud — aplicando fluxos, automações e modelagem de dados para resolver problemas reais.
                        </p>
                        <p className="mb-6 text-slate-200">
                            Curso Engenharia de Software e uno fundamentos acadêmicos a práticas modernas do mercado (clean code, testes, Git e entrega
                            contínua). Perfil analítico, comunicação clara e colaboração em times ágeis.
                        </p>

                        <h3 className="text-xl font-semibold text-white">💡 Habilidades principais</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {[
                                'Administração Salesforce',
                                'Agentforce',
                                'Experience Cloud',
                                'Fluxos e automações',
                                'React',
                                'Node.js',
                                'TypeScript',
                                'Python',
                                'Git/GitHub',
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-blue-800/40 bg-blue-950/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-100/90"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-white">🎯 Objetivo profissional</h3>
                        <p className="text-slate-200">
                            Contribuir em projetos que gerem valor de negócio com qualidade e simplicidade — atuando como dev full stack e evoluindo no
                            universo Salesforce. Aberto a posições júnior/estágio e freelas.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Sobre;
