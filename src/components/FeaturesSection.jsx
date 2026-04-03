import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HardDrive, Music, FolderTree } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
    <div
        className={`feature-card bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-3xl p-8 hover:border-mf-primary/30 transition-colors ${className}`}
    >
        <div className="w-14 h-14 rounded-2xl bg-mf-surface-light/50 flex items-center justify-center mb-6 text-mf-primary">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-mf-text-muted leading-relaxed">{description}</p>
    </div>
);

const FeaturesSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        /* ── Section title reveal ── */
        gsap.from('.features-title', {
            scrollTrigger: {
                trigger: '.features-title',
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
            },
            y: 60,
            opacity: 0,
        });

        gsap.from('.features-subtitle', {
            scrollTrigger: {
                trigger: '.features-subtitle',
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
            },
            y: 40,
            opacity: 0,
        });

        /* ── Each feature card floats up with parallax scrub ── */
        gsap.utils.toArray('.feature-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'top 55%',
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
                scale: 0.95,
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="features" className="relative min-h-screen py-24 px-4 z-10 w-full max-w-7xl mx-auto flex flex-col justify-center snap-start">

            <div className="text-center mb-16 md:mb-24">
                <h2 className="features-title text-4xl md:text-5xl font-bold mb-4">
                    ¿Qué es <span className="text-mf-primary">Music Frito</span>?
                </h2>
                <p className="features-subtitle text-xl text-mf-text-muted max-w-2xl mx-auto">
                    La filosofía es simple: una experiencia audiófila sin distracciones, centrada en tu propia biblioteca.
                </p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                    icon={HardDrive}
                    title="Reproducción Local Total"
                    description="Olvida el streaming y las conexiones a internet. Escucha tus archivos MP3, FLAC, WAV o AAC directamente desde el almacenamiento interno de tu dispositivo sin límite de saltos."
                    className="lg:col-span-2"
                />

                <FeatureCard
                    icon={Music}
                    title="Interfaz Premium"
                    description="Navegación fluida, moderna y familiar inspirada en las grandes apps de streaming, pero con la inmediatez que solo el almacenamiento local puede ofrecer."
                />

                <FeatureCard
                    icon={FolderTree}
                    title="Organización Inteligente"
                    description="Escanea tu dispositivo, crea playlists, gestiona favoritos dinámicos y navega por carpetas físicas fácilmente con nuestra indexación ultrarrápida."
                    className="lg:col-span-3 lg:grid-cols-2"
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
