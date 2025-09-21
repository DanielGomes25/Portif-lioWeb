import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center p-8 bg-white rounded-lg shadow-lg my-8 mx-4"
        >
            <h1 className="text-3xl font-bold text-green-500">Bem-vindo ao meu Portfólio</h1>
            <p className="mt-4 text-gray-700">Aqui você encontrará todos os meus projetos e informações de contato.</p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition">
                Saiba mais
            </button>
        </motion.div>
    );
}

export default Home;
