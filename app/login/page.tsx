
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
        navigate('/dashboard');
    };
    return (
        <div className="flex items-center justify-center py-24">
            <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Connexion à MarketBot</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-light mb-2">Email</label>
                        <input type="email" required className="w-full bg-primary text-white p-3 rounded-lg border border-accent focus:ring-2 focus:ring-highlight-green focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light mb-2">Mot de passe</label>
                        <input type="password" required className="w-full bg-primary text-white p-3 rounded-lg border border-accent focus:ring-2 focus:ring-highlight-green focus:outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-highlight-green text-primary font-bold py-3 px-4 rounded-lg text-lg hover:bg-green-400 transition-all duration-300">Se connecter</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
