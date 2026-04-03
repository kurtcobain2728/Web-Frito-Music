import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AdvancedFeaturesSection from './components/AdvancedFeaturesSection';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import DonationsSection from './components/DonationsSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const homeRef = useRef(null);

    useGSAP(() => {
        /* ── 6. Scroll Progress Bar — 0 re-renders via GSAP ── */
        // Initialize to scaleX(0) using gsap.set (correct way)
        gsap.set('.scroll-progress-bar', { scaleX: 0, transformOrigin: 'left center' });

        gsap.to('.scroll-progress-bar', {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
            },
        });

        /* ── 7. Dynamic Header — compact & opaque after scrolling past hero ── */
        ScrollTrigger.create({
            start: 'top -100',
            onUpdate: (self) => {
                const header = document.querySelector('.main-header');
                if (!header) return;
                if (self.direction === 1 && self.progress > 0.02) {
                    header.classList.add('header-scrolled');
                } else if (self.progress < 0.01) {
                    header.classList.remove('header-scrolled');
                }
            },
        });
    }, { scope: homeRef });

    return (
        <div ref={homeRef} className="relative min-h-screen bg-mf-bg text-mf-text-main overflow-x-hidden selection:bg-mf-primary selection:text-white">
            {/* Absolute Background element */}
            <ParticleBackground />

            {/* 6. Scroll Progress Bar — GSAP driven, 0 React re-renders */}
            <div
                className="scroll-progress-bar fixed top-0 left-0 w-full h-[3px] z-[60]"
                style={{
                    background: 'linear-gradient(90deg, #FF5722, #FF9800, #FF5722)',
                    boxShadow: '0 0 10px rgba(255,87,34,0.5), 0 0 5px rgba(255,87,34,0.3)',
                }}
            />

            {/* 7. Header (Sticky) — Dynamic appearance on scroll */}
            <header className="main-header fixed top-0 left-0 w-full z-50 bg-mf-bg/80 backdrop-blur-md border-b border-mf-surface-light transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.jpg"
                            alt="Music Frito Logo"
                            className="w-9 h-9 rounded-lg object-cover shadow-md"
                        />
                        <span className="font-bold text-xl tracking-tight hidden sm:block">Music Frito</span>
                    </div>
                    <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-mf-text-muted">
                        <a href="#features" className="hover:text-mf-primary transition-colors">Características</a>
                        <a href="#about" className="hover:text-mf-primary transition-colors">Nosotros</a>
                        <a href="#download" className="px-4 py-2 bg-white/5 hover:bg-mf-primary hover:text-white rounded-full transition-colors text-white hidden sm:block">Descargar</a>
                    </nav>
                </div>
            </header>

            <main className="relative w-full flex flex-col items-center snap-y snap-mandatory">
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
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-de-uso" element={<TermsOfUse />} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
    );
}

export default App;
