
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import HomePage from './app/page';
import HowItWorksPage from './app/how-it-works/page';
import CompanyPage from './app/company/page';
import CareersPage from './app/careers/page';
import FaqPage from './app/faq/page';
import LoginPage from './app/login/page';
import SignupPage from './app/signup/page';
import DashboardPage from './app/dashboard/page';


const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen bg-primary">
                <Header isLoggedIn={isLoggedIn} onLogout={logout} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/company" element={<CompanyPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/login" element={<LoginPage onLogin={login} />} />
                        <Route path="/signup" element={<SignupPage onSignup={login} />} />
                        <Route
                            path="/dashboard"
                            element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
