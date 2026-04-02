import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import AnimatedLogo from './components/AnimatedLogo';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AdvancedFeaturesSection from './components/AdvancedFeaturesSection';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import DonationsSection from './components/DonationsSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="relative min-h-screen bg-mf-bg text-mf-text-main overflow-x-hidden selection:bg-mf-primary selection:text-white">
            {/* Absolute Background element */}
            <ParticleBackground />

            {/* 1. Header (Sticky) */}
            <header className="fixed top-0 left-0 w-full z-50 bg-mf-bg/80 backdrop-blur-md border-b border-mf-surface-light">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative">
                            <AnimatedLogo />
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">Music Frito</span>
                    </div>
                    <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-mf-text-muted">
                        <a href="#features" className="hover:text-mf-primary transition-colors">Características</a>
                        <a href="#about" className="hover:text-mf-primary transition-colors">Nosotros</a>
                        <a href="#download" className="px-4 py-2 bg-white/5 hover:bg-mf-primary hover:text-white rounded-full transition-colors text-white hidden sm:block">Descargar</a>
                    </nav>
                </div>
            </header>

            <main className="relative w-full flex flex-col items-center">
                {/* Sections in Required Order */}
                <HeroSection />
                <FeaturesSection />
                <AdvancedFeaturesSection />
                <AboutSection />
                <DownloadSection />
                <DonationsSection />
            </main>

            <Footer />
        </div>
    );
}

export default App;
