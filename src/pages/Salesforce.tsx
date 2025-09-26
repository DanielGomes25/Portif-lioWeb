import React from 'react';
import { motion } from 'framer-motion';

const Salesforce: React.FC = () => {
    return (
        <motion.section
            id="salesforce"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto w-full max-w-4xl p-2 text-center"
        >
            <div className="mx-auto max-w-2xl space-y-5">
                <div className="flex justify-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 ring-1 ring-white/20">
                        Certificado: Agentforce Specialist
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 ring-1 ring-white/20">
                        Em estudo
                    </span>
                </div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Salesforce</h2>
                <p className="text-base text-slate-100/90">
                    Certificado como Agentforce Specialist e atualmente focado em Administração Salesforce. Sigo
                    estudando e evoluindo no ecossistema.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {['Agentforce Specialist (certificado)', 'Administração Salesforce', 'Fluxos e automações'].map((chip) => (
                        <span
                            key={chip}
                            className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                        >
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Salesforce;
