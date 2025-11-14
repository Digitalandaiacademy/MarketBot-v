
import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-secondary">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-accent">
            <p>&copy; {new Date().getFullYear()} MarketBot. Tous droits réservés.</p>
            <p className="text-sm mt-2">Avertissement : Investir comporte des risques. Les performances passées ne préjugent pas des résultats futurs.</p>
        </div>
    </footer>
);

export default Footer;
