
import React from 'react';

export const MarketBotLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 100 100" className="flex-shrink-0">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#004E89" strokeWidth="5" />
      <path d="M50 80 C 65 80, 75 65, 75 50" fill="none" stroke="#004E89" strokeWidth="5" />
      <path d="M50 80 C 35 80, 25 65, 25 50" fill="none" stroke="#004E89" strokeWidth="5" />
      <rect x="35" y="55" width="30" height="5" fill="#4285F4" />
      <path d="M 20 50 L 35 40 L 45 50 L 60 30 L 70 40 L 80 20 L 90 25" fill="none" stroke="#34A853" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 20 L 90 25 L 85 35 Z" fill="#34A853" />
      <path d="M 20 60 L 35 50 L 45 60 L 60 40" fill="none" stroke="#4285F4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="33" y="28" width="4" height="10" fill="#34A853" />
      <rect x="35" y="23" width="0" height="5" stroke="#34A853" strokeWidth="2" />
      <rect x="43" y="38" width="4" height="10" fill="#34A853" />
      <rect x="45" y="33" width="0" height="5" stroke="#34A853" strokeWidth="2" />
      <rect x="68" y="28" width="4" height="10" fill="#34A853" />
      <rect x="70" y="23" width="0" height="5" stroke="#34A853" strokeWidth="2" />
    </svg>
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-white">Market<span className="text-highlight-green">Bot</span></span>
      <div className="h-1 bg-highlight-orange w-10 rounded-full" />
    </div>
  </div>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
);

export const AutomationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73 4 6.93"/>
    </svg>
);

export const CashbackIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2"/><path d="M2 12h20"/><path d="M2 16.5A3.5 3.5 0 0 1 5.5 13h13a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 18.5 20h-13A3.5 3.5 0 0 1 2 16.5v0Z"/><path d="M16 16h2"/><path d="M6 16h2"/>
    </svg>
);

export const AnalyticsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
);

export const SecurityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);

export const SupportIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22a10 10 0 1 0-10-10c0 1.82.5 3.53 1.34 5.01L2 22Z"/><path d="m7.5 10.5 2 2 5-5"/>
    </svg>
);

export const PaymentsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
);