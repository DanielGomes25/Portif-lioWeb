import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Ícones do Lucide

const Contato: React.FC = () => {
    return (
        <section id="contato" className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Contato</h2>
            <p className="text-neutral-300 mb-6">
                Você pode me encontrar nas redes sociais ou enviar um e-mail.
            </p>

            {/* Contatos com Ícones */}
            <div className="flex flex-col gap-6">
                {/* LinkedIn */}
                <div className="flex items-center gap-3 text-neutral-300">
                    <Linkedin className="h-6 w-6 text-blue-500" />
                    <a href="https://www.linkedin.com/in/daniel-gomes-de-paula/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                        LinkedIn
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 text-neutral-300">
                    <Phone className="h-6 w-6 text-green-500" />
                    <a href="https://wa.me/5511975526549" target="_blank" rel="noreferrer" className="hover:text-green-400">
                        WhatsApp
                    </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-neutral-300">
                    <Mail className="h-6 w-6 text-red-500" />
                    <a href="mailto:daniel.gomes.9@hotmail.com" className="hover:text-red-400">
                        Email
                    </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3 text-neutral-300">
                    <Github className="h-6 w-6 text-gray-500" />
                    <a href="https://github.com/DanielGomes25" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contato;
