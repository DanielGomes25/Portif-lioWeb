import React from 'react';
import Header from './Header';
import Sobre from './Sobre';


const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-6 py-12">
                <Sobre />
            </main>

        </div>
    );
};

export default Home;
