import React from 'react';

interface ButtonProps {
    text: string;
    link: string;
}

export const Button: React.FC<ButtonProps> = ({ text, link }) => {
    return (
        <a
            href={link}
            className="inline-block px-6 py-3 mt-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        >
            {text}
        </a>
    );
};
