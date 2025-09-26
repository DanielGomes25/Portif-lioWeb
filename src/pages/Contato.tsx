import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Ícones do Lucide

const Contato: React.FC = () => {
    type ContactInfo = {
        href: string;
        label: string;
        Icon: LucideIcon;
        description: string;
    };

    const contacts: ContactInfo[] = [

        {
            href: 'https://www.linkedin.com/in/daniel-gomes-de-paula/',
            label: 'LinkedIn',
            Icon: Linkedin,

            description:
                'Detalhes das minhas experiências em Salesforce, projetos Agentforce e conquistas profissionais recentes.',

        },
        {
            href: 'https://wa.me/5511975526549',
            label: 'WhatsApp',
            Icon: Phone,

            description: 'Converse comigo diretamente sobre oportunidades, freelas ou dúvidas rápidas.',

        },
        {
            href: 'mailto:daniel.gomes.9@hotmail.com',
            label: 'Email',
            Icon: Mail,

            description: 'Envie uma mensagem detalhada para falarmos sobre projetos e colaborações.',

        },
        {
            href: 'https://github.com/DanielGomes25',
            label: 'GitHub',
            Icon: Github,

            description: 'Acompanhe meus repositórios, estudos e contribuições open source.',

        },
    ];

    return (
        <motion.section
            id="contato"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="p-2"
        >
            <h2 className="text-4xl font-semibold text-white">Contato</h2>
            <p className="mt-4 max-w-2xl text-slate-100/90">
                Vamos conversar! Estou disponível para oportunidades, parcerias e para compartilhar ideias sobre tecnologia e Salesforce.
            </p>

            <div className="mt-10 flex flex-col gap-5">

                {contacts.map(({ href, label, Icon, description }) => (

                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"

                        aria-label={`Abrir ${label} de Daniel Gomes de Paula`}

                        className="group flex items-center gap-4 rounded-full ring-1 ring-white/15 bg-white/5 px-5 py-3 text-slate-100/90 transition-all duration-300 hover:ring-white/30 hover:bg-white/10"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
                            <Icon className="h-6 w-6" />
                        </span>
                        <div>
                            <p className="text-base font-semibold text-white">{label}</p>

                            <p className="text-sm text-slate-100/80">{description}</p>

                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};

export default Contato;
