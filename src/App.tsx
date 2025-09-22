import React from 'react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Salesforce from './pages/Salesforce';
import Contato from './pages/Contato';

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-16">
        {/* Página Home */}
        <Home />

        {/* Página Sobre */}
        <Sobre />

        {/* Página Salesforce */}
        <Salesforce />

        {/* Página Projetos */}
        <Projetos />

        {/* Página Contato */}
        <Contato />
      </div>
    </motion.div>

  );
};

export default App;
