import React from 'react';
import { motion } from 'framer-motion';

const Salesforce: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-800/40 bg-slate-950/60 p-12 text-center shadow-[0_45px_85px_-45px_rgba(37,99,235,0.8)] backdrop-blur"
        >
            <div className="mx-auto max-w-2xl space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-blue-400/80">Especialidade</p>
                <h2 className="text-4xl font-semibold text-blue-100 sm:text-5xl">Salesforce</h2>
                <p className="text-lg text-slate-300">
                    Soluções end-to-end para ecossistema Salesforce: automações, dashboards, integrações e
                    personalizações que geram impacto real em equipes comerciais e de atendimento.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-3 font-semibold text-slate-100 shadow-[0_20px_45px_-20px_rgba(59,130,246,0.9)] transition-colors hover:from-blue-600 hover:to-blue-400"
                >
                    Saiba mais
                </motion.button>
            </div>
        </motion.section>
    );
}

export default Salesforce;
