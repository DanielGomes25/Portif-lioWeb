import React from 'react';
import Home from '../src/pages/Home';
import Sobre from '../src/pages/Sobre';
import Projetos from '../src/pages/Projetos';
import Salesforce from '../src/pages/Salesforce';
import Contato from '../src/pages/Contato';

const App: React.FC = () => {
  return (
    <div>
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
  );
};

export default App;
