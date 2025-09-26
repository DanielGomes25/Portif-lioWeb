import React from 'react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Salesforce from './pages/Salesforce';
import Contato from './pages/Contato';

const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = '', children }) => (
  <section className={`w-full ${className}`}>
    <div className="mx-auto max-w-6xl px-6 py-16">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Home - fundo azul escuro */}
      <Section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100">
        <Home />
      </Section>

      {/* Sobre - fundo claro */}
      <Section className="bg-white text-slate-900">
        <Sobre />
      </Section>

      {/* Salesforce - fundo dark com toque de índigo */}
      <Section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-slate-100">
        <Salesforce />
      </Section>

      {/* Projetos - fundo neutro claro */}
      <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
        <Projetos />
      </Section>

      {/* Contato - fundo escuro suave */}
      <Section className="bg-slate-900 text-slate-100">
        <Contato />
      </Section>
    </motion.div>
  );
};

export default App;
