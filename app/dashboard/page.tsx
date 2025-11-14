
import React, { useState, useEffect } from 'react';
import type { Sale } from '../../types';

const MOCK_SALES: Sale[] = [
    { id: '1', brand: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', product: 'Echo Dot', cashback: 2.35, timestamp: 'il y a 2 min' },
    { id: '2', brand: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com', product: 'Chaussures Ultraboost', cashback: 8.99, timestamp: 'il y a 15 min' },
    { id: '3', brand: 'Apple', logo: 'https://logo.clearbit.com/apple.com', product: 'AirPods Pro', cashback: 12.50, timestamp: 'il y a 1 heure' },
    { id: '4', brand: 'Nike', logo: 'https://logo.clearbit.com/nike.com', product: 'Air Force 1', cashback: 7.20, timestamp: 'il y a 3 heures' },
    { id: '5', brand: 'Sony', logo: 'https://logo.clearbit.com/sony.com', product: 'PlayStation 5', cashback: 25.00, timestamp: 'il y a 5 heures' },
];

const RobotStatus: React.FC = () => (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="text-5xl">🤖</div>
            <div>
                <h3 className="text-xl font-bold text-white">Statut du MarketBot</h3>
                <p className="text-highlight-green font-semibold">En Ligne - Travaille 24/7</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-highlight-green"></span>
            </span>
        </div>
    </div>
);

const BudgetTracker: React.FC = () => {
    const totalBudget = 500;
    const usedBudget = 287.50;
    const percentage = (usedBudget / totalBudget) * 100;

    return (
        <div className="bg-secondary p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Budget Publicitaire</h3>
            <div className="flex justify-between items-end mb-2">
                <span className="text-light font-medium">${usedBudget.toFixed(2)} Utilisé</span>
                <span className="text-accent text-sm">Total: ${totalBudget.toFixed(2)}</span>
            </div>
            <div className="w-full bg-accent rounded-full h-4">
                <div className="bg-gradient-to-r from-highlight-green to-teal-400 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

interface StatsCardProps {
    title: string;
    value: string;
    isProfit?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, isProfit = false }) => (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
        <p className={`text-4xl font-black ${isProfit ? 'text-highlight-green' : 'text-white'}`}>{value}</p>
    </div>
);

const SalesHistory: React.FC = () => (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Ventes Récentes</h3>
        <div className="space-y-4">
            {MOCK_SALES.map(sale => (
                <div key={sale.id} className="flex items-center justify-between p-3 bg-primary rounded-lg">
                    <div className="flex items-center gap-4">
                        <img src={sale.logo} alt={sale.brand} className="w-8 h-8 rounded-full bg-white p-1" />
                        <div>
                            <p className="font-semibold text-white">{sale.product}</p>
                            <p className="text-xs text-accent">{sale.brand} - {sale.timestamp}</p>
                        </div>
                    </div>
                    <p className="font-bold text-highlight-green">+${sale.cashback.toFixed(2)}</p>
                </div>
            ))}
        </div>
    </div>
);

const DaysCounter: React.FC = () => {
    const [days, setDays] = useState(0);

    useEffect(() => {
        const startDate = new Date('2023-10-26T00:00:00Z');
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDays(diffDays);
    }, []);

    return (
        <StatsCard title="Jours de Travail" value={String(days)} />
    );
};

const DashboardPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-primary text-light p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-black text-white mb-8">Votre Tableau de Bord</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <RobotStatus />
                        <BudgetTracker />
                        <SalesHistory />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <StatsCard title="Votre Cashback (Profit)" value="$1,284.72" isProfit />
                        <StatsCard title="Rentabilité du Robot" value="+35.8%" isProfit />
                        <DaysCounter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
