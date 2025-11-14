
import React from 'react';
import { Link } from 'react-router-dom';
import {
    AutomationIcon,
    CashbackIcon,
    AnalyticsIcon,
    SecurityIcon,
    SupportIcon,
    PaymentsIcon,
    CheckCircleIcon,
    ArrowRightIcon
} from '../../components/Icons';

const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-highlight-green/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-highlight-orange/10 rounded-full filter blur-3xl animate-float [animation-delay:-3s]"></div>
    </div>
);

const HeroSection = () => (
    <section className="relative py-20 sm:py-32 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-highlight-green mb-4 animate-fade-in-up [animation-delay:0.1s]">
                ✨ Révolution de la Publicité
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 animate-fade-in-up [animation-delay:0.2s]">Gagnez de l'argent avec des Publicités IA</h1>
            <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto mb-8 animate-fade-in-up [animation-delay:0.3s]">MarketBot automatise vos campagnes publicitaires et vous génère des revenus passifs. Jusqu'à 15% de cashback sur chaque vente.</p>
            <div className="flex justify-center items-center gap-4 mb-16 animate-fade-in-up [animation-delay:0.4s]">
                <Link to="/signup" className="bg-highlight-green text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20 flex items-center gap-2">
                    Commencer <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="bg-secondary text-light font-medium py-3 px-6 rounded-lg text-lg hover:bg-accent transition-all duration-300">
                    Découvrir
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up [animation-delay:0.5s]">
                <div className="bg-secondary/50 p-6 rounded-xl">
                    <p className="text-3xl font-bold text-white">10,000+</p>
                    <p className="text-accent">Utilisateurs actifs</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl">
                    <p className="text-3xl font-bold text-white">$2.5M+</p>
                    <p className="text-accent">Revenus générés</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl">
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-accent">Travail automatisé</p>
                </div>
            </div>
        </div>
    </section>
);

const ProcessSection = () => (
    <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Un processus simple en 3 étapes</h2>
                <p className="text-lg text-accent mt-4">pour commencer à générer des revenus</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
                 <div className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-1 bg-accent/30 border-t-2 border-dashed border-accent"></div>
                 <div className="relative bg-primary p-8 rounded-2xl shadow-lg text-center z-10">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-highlight-green text-primary font-bold text-2xl rounded-full">1</div>
                    <h3 className="text-xl font-bold text-white mt-8 mb-2">Vous payez pour la publicité</h3>
                    <p className="text-accent">Achetez des prospects sur différentes plateformes pour promouvoir vos produits</p>
                </div>
                <div className="relative bg-primary p-8 rounded-2xl shadow-lg text-center z-10">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-highlight-green text-primary font-bold text-2xl rounded-full">2</div>
                    <h3 className="text-xl font-bold text-white mt-8 mb-2">MarketBot promeut vos produits</h3>
                    <p className="text-accent">Notre IA automatise la promotion de biens et services avec des programmes de remboursement</p>
                </div>
                <div className="relative bg-primary p-8 rounded-2xl shadow-lg text-center z-10">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-highlight-green text-primary font-bold text-2xl rounded-full">3</div>
                    <h3 className="text-xl font-bold text-white mt-8 mb-2">Vous gagnez du cashback</h3>
                    <p className="text-accent">Recevez jusqu'à 15% de remise en argent sur chaque vente générée</p>
                </div>
            </div>
        </div>
    </section>
);

const RoadmapSection = () => {
    const phases = [
        {
            name: "Phase 1",
            title: "Configuration & Paiement",
            status: "Complétée",
            color: "green",
            tasks: [
                "Créer un compte MarketBot",
                "Définir votre budget publicitaire",
                "Connecter vos méthodes de paiement",
            ]
        },
        {
            name: "Phase 2",
            title: "Activation du Robot",
            status: "En cours",
            color: "orange",
            tasks: [
                "Sélectionner les produits à promouvoir",
                "Configurer les préférences d'audience",
                "Activer MarketBot pour travail 24/7",
            ]
        },
        {
            name: "Phase 3",
            title: "Gain de Revenus",
            status: "À venir",
            color: "gray",
            tasks: [
                "Suivre vos statistiques en temps réel",
                "Recevoir des commissions automatiques",
                "Optimiser vos campagnes",
            ]
        }
    ];
    const statusColors: { [key: string]: string } = {
        green: "text-highlight-green bg-highlight-green/10",
        orange: "text-highlight-orange bg-highlight-orange/10",
        gray: "text-accent bg-accent/10"
    };

    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Votre Parcours vers les Gains</h2>
                    <p className="text-lg text-accent mt-4">Une feuille de route claire pour maximiser vos revenus</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {phases.map((phase) => (
                        <div key={phase.name} className="bg-secondary p-8 rounded-2xl shadow-lg border-t-4 border-highlight-green">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[phase.color]}`}>{phase.status}</span>
                            </div>
                            <ul className="space-y-4">
                                {phase.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-highlight-green flex-shrink-0 mt-1" />
                                        <span className="text-accent">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AdvantagesSection = () => {
    const advantages = [
        { icon: <AutomationIcon className="w-8 h-8 text-highlight-green"/>, title: "Automatisation Complète", description: "Notre IA gère vos campagnes sans intervention manuelle. Démarrez et oubliez." },
        { icon: <CashbackIcon className="w-8 h-8 text-highlight-green"/>, title: "Cashback Jusqu'à 15%", description: "Recevez une commission sur chaque vente générée par vos publicités" },
        { icon: <AnalyticsIcon className="w-8 h-8 text-highlight-green"/>, title: "Analyse en Temps Réel", description: "Suivez vos performances avec un dashboard détaillé et des insights IA" },
        { icon: <SecurityIcon className="w-8 h-8 text-highlight-green"/>, title: "Sécurité Garantie", description: "Vos données sont protégées avec le plus haut standard de sécurité" },
        { icon: <SupportIcon className="w-8 h-8 text-highlight-green"/>, title: "Support 24/7", description: "Notre équipe est toujours disponible pour vous aider" },
        { icon: <PaymentsIcon className="w-8 h-8 text-highlight-green"/>, title: "Paiements Instantanés", description: "Transférez vos revenus quand vous le souhaitez, sans minimum" },
    ];
    return (
         <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Avantages MarketBot</h2>
                    <p className="text-lg text-accent mt-4">Tout ce dont vous avez besoin pour réussir</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                    <div key={index} className="bg-primary p-8 rounded-2xl shadow-lg">
                        <div className="mb-4">{advantage.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                        <p className="text-accent">{advantage.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
             <div className="text-center bg-secondary p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
                <p className="text-accent max-w-2xl mx-auto mb-8">Rejoignez plus de 10,000 utilisateurs qui gagnent déjà des revenus passifs avec MarketBot</p>
                <div className="flex justify-center items-center gap-4">
                    <Link to="/signup" className="bg-highlight-green text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20">
                        Commencer gratuitement
                    </Link>
                    <button className="bg-primary text-light font-medium py-3 px-6 rounded-lg text-lg hover:bg-accent transition-all duration-300">
                        Planifier une démo
                    </button>
                </div>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => (
    <div className="bg-primary text-light">
       <HeroSection />
       <ProcessSection />
       <RoadmapSection />
       <AdvantagesSection />
       <CTASection />
    </div>
);

export default HomePage;
