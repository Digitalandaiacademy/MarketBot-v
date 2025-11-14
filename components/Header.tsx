
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MarketBotLogo, MenuIcon, XIcon } from './Icons';

const Header: React.FC<{ isLoggedIn: boolean; onLogout: () => void; }> = ({ isLoggedIn, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Comment ça marche', path: '/how-it-works' },
        { name: 'Entreprise', path: '/company' },
        { name: 'Carrières', path: '/careers' },
        { name: 'FAQ', path: '/faq' },
    ];
    
    const baseLinkClass = "py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300";
    const activeLinkClass = "text-white bg-accent";
    const inactiveLinkClass = "text-light hover:text-white hover:bg-secondary";

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" onClick={closeMenu}>
                           <MarketBotLogo />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                     <div className="hidden md:flex items-center space-x-2">
                        {isLoggedIn ? (
                             <>
                                <Link to="/dashboard" className="bg-highlight-green text-primary font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-all duration-300">Tableau de bord</Link>
                                <button onClick={onLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300">Déconnexion</button>
                             </>
                        ) : (
                            <>
                                <Link to="/login" className="text-light hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Connexion</Link>
                                <Link to="/signup" className="bg-highlight-green text-primary font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-all duration-300">S'inscrire</Link>
                            </>
                        )}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-light hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white">
                            <span className="sr-only">Ouvrir le menu principal</span>
                            {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

             {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} to={link.path} onClick={closeMenu} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-accent text-white' : 'text-light hover:bg-secondary hover:text-white'}`}>{link.name}</NavLink>
                        ))}
                         <div className="border-t border-accent mt-4 pt-4">
                            {isLoggedIn ? (
                                <div className='px-2 space-y-2'>
                                    <Link to="/dashboard" onClick={closeMenu} className="block text-center bg-highlight-green text-primary font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-all duration-300">Tableau de bord</Link>
                                    <button onClick={() => { onLogout(); closeMenu(); }} className="w-full text-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300">Déconnexion</button>
                                </div>
                            ) : (
                                <div className='px-2 space-y-2'>
                                    <Link to="/login" onClick={closeMenu} className="block text-center text-light bg-secondary font-medium py-2 px-4 rounded-lg transition-colors duration-300">Connexion</Link>
                                    <Link to="/signup" onClick={closeMenu} className="block text-center bg-highlight-green text-primary font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-all duration-300">S'inscrire</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
