
import React, { useState } from 'react';

const FaqPage: React.FC = () => {
     const [openFaq, setOpenFaq] = useState<number | null>(0);
    const faqs = [
        { q: "Qu'est-ce que MarketBot exactement ?", a: "MarketBot est un service alimenté par l'IA qui investit vos fonds dans des campagnes publicitaires. Il trouve des produits tendance, en fait la promotion, et vous gagnez du cashback sur les ventes générées. C'est un moyen de gagner de l'argent sans intervention de votre part grâce au marketing en ligne." },
        { q: "Combien puis-je gagner ?", a: "Les gains peuvent varier en fonction des conditions du marché et du budget que vous allouez. Notre IA vise des campagnes à haut rendement, et les utilisateurs peuvent gagner jusqu'à 15% de cashback sur les ventes. Historiquement, les utilisateurs ont constaté des retours significatifs, mais les performances passées ne garantissent pas les résultats futurs." },
        { q: "Mon investissement est-il sécurisé ?", a: "Nous utilisons des protocoles de sécurité conformes aux normes de l'industrie pour protéger votre compte et vos données. Bien que tous les investissements comportent un certain degré de risque, notre IA est conçue pour l'atténuer en diversifiant les campagnes sur divers produits et plateformes. Nous disposons également d'un fonds de réserve pour nous protéger contre les ralentissements imprévus du marché." },
        { q: "Comment commencer ?", a: "C'est très simple ! Il vous suffit de créer un compte, de déposer des fonds sur votre budget publicitaire et d'activer le robot. L'IA s'occupera du reste, et vous pourrez suivre ses performances depuis votre tableau de bord." },
        { q: "Comment puis-je retirer mes bénéfices ?", a: "Vous pouvez demander un retrait de vos bénéfices de cashback à tout moment depuis votre tableau de bord. Les retraits sont généralement traités dans un délai de 24 à 48 heures vers le mode de paiement que vous avez choisi." }
    ];
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-12">Foire Aux Questions</h1>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-secondary rounded-lg shadow-lg overflow-hidden">
                        <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left p-6 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-white">{faq.q}</h2>
                            <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                        </button>
                        <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-accent p-6 pt-0">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqPage;
