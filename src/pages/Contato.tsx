import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Ícones do Lucide

const Contato: React.FC = () => {
    const contacts = [
        {
            href: 'https://www.linkedin.com/in/daniel-gomes-de-paula/',
            label: 'LinkedIn',
            Icon: Linkedin,
        },
        {
            href: 'https://wa.me/5511975526549',
            label: 'WhatsApp',
            Icon: Phone,
        },
        {
            href: 'mailto:daniel.gomes.9@hotmail.com',
            label: 'Email',
            Icon: Mail,
        },
        {
            href: 'https://github.com/DanielGomes25',
            label: 'GitHub',
            Icon: Github,
        },
    ];

    return (
        <motion.section
            id="contato"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="rounded-3xl border border-blue-800/30 bg-slate-950/60 p-10 shadow-[0_45px_95px_-55px_rgba(59,130,246,0.8)] backdrop-blur"
        >
            <h2 className="text-4xl font-semibold text-blue-100">Contato</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
                Vamos conversar! Estou disponível para oportunidades, parcerias e para compartilhar ideias sobre tecnologia e Salesforce.
            </p>

            <div className="mt-10 flex flex-col gap-5">
                {contacts.map(({ href, label, Icon }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-4 rounded-2xl border border-blue-800/20 bg-blue-950/20 px-5 py-4 text-slate-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-900/30"
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/60 text-blue-300 shadow-[0_10px_25px_-15px_rgba(59,130,246,0.8)] transition-colors group-hover:text-blue-200">
                            <Icon className="h-6 w-6" />
                        </span>
                        <div>
                            <p className="text-base font-semibold text-blue-100 group-hover:text-blue-200">{label}</p>
                            <p className="text-sm text-slate-300/80">Clique para abrir em uma nova aba</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};

export default Contato;
