import React from 'react';
import { motion } from 'framer-motion';

const Salesforce: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center p-8 bg-white rounded-lg shadow-lg my-8 mx-4"
        >
            <h1 className="text-3xl font-bold text-blue-500">Salesforce</h1>
            <p className="mt-4 text-gray-700">Conheça meus projetos relacionados ao Salesforce.</p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition">
                Saiba mais
            </button>
        </motion.div>
    );
}

export default Salesforce;
