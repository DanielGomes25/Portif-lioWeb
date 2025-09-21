import React from 'react';

const Sobre: React.FC = () => {
    return (
        <section id="sobre" className="mb-12 p-8 bg-neutral-800 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>

            {/* Seção da Foto */}
            <div className="flex items-center space-x-6 mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <img
                        src="public/daniel.jpeg" // Caminho da imagem na pasta public
                        alt="Foto de Daniel Gomes de Paula"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div>
                    <p className="text-neutral-300 mb-6">
                        🚀 Sou desenvolvedor Full Stack com experiência prática em desenvolvimento web utilizando React, Node.js e TypeScript.
                        Atualmente, estou expandindo minha atuação para o ecossistema Salesforce, com foco em Agentforce, Experience Cloud e Administração, aplicando conceitos de fluxos, bibliotecas de dados e automações.
                    </p>
                    <p className="text-neutral-300 mb-6">
                        Estou cursando Engenharia de Software, unindo fundamentos acadêmicos de Ciência da Computação com práticas modernas do mercado. Tenho perfil voltado à resolução de problemas, colaboração em times ágeis e criação de soluções escaláveis.
                    </p>

                    <h3 className="text-xl font-semibold mt-6">💡 Habilidades principais</h3>
                    <ul className="list-disc ml-6 text-neutral-300 mb-6">
                        <li>Salesforce: Agentforce, Experience Cloud, fluxos e automações</li>
                        <li>Desenvolvimento Full Stack: Python, JavaScript, TypeScript, Node.js, React</li>
                        <li>Metodologias Ágeis: SCRUM</li>
                        <li>Ferramentas: Git/GitHub, VS Code</li>
                    </ul>

                    <h3 className="text-xl font-semibold">🎯 Objetivo profissional</h3>
                    <p className="text-neutral-300">
                        Contribuir para projetos inovadores em empresas que utilizam tecnologia como motor de transformação, aplicando minhas habilidades técnicas e conhecimento em Salesforce para gerar impacto e eficiência.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
