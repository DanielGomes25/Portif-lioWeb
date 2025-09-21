import React from 'react';
import { motion } from 'framer-motion';
import Home from '../src/pages/Home';
import Projetos from '../src/pages/Projetos';
import Salesforce from '../src/pages/Salesforce';
import Contato from '../src/pages/Contato';

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100"
    >
      {/* Página Home */}
      <Home />

      {/* Página Salesforce */}
      <Salesforce />

      {/* Página Projetos */}
      <Projetos />

      {/* Página Contato */}
      <Contato />
    </motion.div>

  );
};

export default App;
