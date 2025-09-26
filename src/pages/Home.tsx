import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (

        < motion.section
            initial={{ opacity: 0, y: 40 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto w-full max-w-5xl text-center"
        >

            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Portfólio</p>
            <h1 className="mt-4 text-4xl font-bold leading-snug text-white sm:text-5xl">
                Bem-vindo ao meu espaço de
                <span className="block text-blue-200">tecnologia e inovação</span>
            </h1>
            <p className="mt-6 text-lg text-slate-100/90">
                Aqui você encontra meus projetos, certificações e experiências em tecnologia,
                com foco em soluções Salesforce e desenvolvimento web moderno.
            </p>
            <motion.a
                href="#sobre"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white/95 px-8 py-3 font-semibold text-slate-900 shadow-lg ring-1 ring-white/40 transition-colors hover:bg-white"
            >
                Saiba mais
            </motion.a>
        </motion.section >

    );
}

export default Home;
