
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
    const steps = [
        { title: "Créez votre compte", description: "Inscrivez-vous en moins de 2 minutes avec votre email" },
        { title: "Activez MarketBot IA", description: "Notre IA analyse vos préférences et crée des campagnes personnalisées" },
        { title: "Lancez les campagnes", description: "MarketBot gère automatiquement vos publicités 24/7" },
        { title: "Gagnez des revenus", description: "Recevez des commissions et du cashback sur chaque vente" },
    ];

    const advantages = [
        { title: "Automatisation Complète", description: "Notre IA gère vos campagnes sans intervention manuelle. Démarrez et oubliez." },
        { title: "Cashback Jusqu'à 15%", description: "Recevez une commission sur chaque vente générée par vos publicités" },
        { title: "Analyse en Temps Réel", description: "Suivez vos performances avec un dashboard détaillé et des insights IA" },
        { title: "Sécurité Garantie", description: "Vos données sont protégées avec le plus haut standard de sécurité" },
        { title: "Support 24/7", description: "Notre équipe est toujours disponible pour vous aider" },
        { title: "Paiements Instantanés", description: "Transférez vos revenus quand vous le souhaitez, sans minimum" },
    ];
    
    return (
    <div className="bg-primary text-light">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Comment fonctionne MarketBot</h1>
          <p className="text-lg text-accent">Découvrez comment notre plateforme IA révolutionne la façon de générer des revenus passifs</p>
        </div>
        
        <div className="py-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">4 étapes simples pour commencer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="bg-secondary p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-4xl font-black text-highlight-green mb-4">{index + 1}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-accent">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="pb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Avantages MarketBot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-secondary p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-accent">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center bg-secondary p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
            <p className="text-accent max-w-2xl mx-auto mb-8">Rejoignez plus de 10,000 utilisateurs qui gagnent déjà des revenus passifs avec MarketBot</p>
            <Link to="/signup" className="bg-highlight-green text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20">
                Commencer gratuitement
            </Link>
        </div>
      </div>
    </div>
    );
};

export default HowItWorksPage;
