import React from 'react';
import { Button } from '../components/Button';

const Header: React.FC = () => {
    return (
        <header className="bg-neutral-900 text-white py-6">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo ou Nome */}
                <h1 className="text-3xl font-semibold">
                    Daniel Gomes de Paula
                </h1>

                {/* Navegação */}
                <nav className="space-x-4">
                    <a href="#sobre" className="hover:text-blue-400">Sobre</a>
                    <a href="#projetos" className="hover:text-blue-400">Projetos</a>
                    <a href="#salesforce" className="hover:text-blue-400">Salesforce</a>
                    <a href="#contato" className="hover:text-blue-400">Contato</a>
                </nav>

                {/* Botão de CTA */}
                <Button text="Ver projetos" link="#projetos" />
            </div>
        </header>
    );
};

export default Header;