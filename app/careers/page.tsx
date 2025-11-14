
import React from 'react';

const CareersPage: React.FC = () => {
    const positions = [
        "Spécialiste de la publicité ciblée sur Facebook et Instagram",
        "Directeur marketing",
        "Spécialiste du marketing Internet",
        "Data scientist"
    ];
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 text-light">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Rejoignez l'équipe</h1>
                <p className="text-xl text-accent mb-12">Vous vous sentez bien dans votre peau ? Déposez votre candidature. Nous recherchons les meilleurs talents !</p>
                <div className="space-y-4 text-left">
                    {positions.map((pos, index) => (
                        <div key={index} className="bg-secondary p-6 rounded-lg flex justify-between items-center shadow-lg">
                            <h2 className="text-lg font-semibold text-white">{pos}</h2>
                            <button className="bg-highlight-green text-primary font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-all duration-300">Postuler</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
