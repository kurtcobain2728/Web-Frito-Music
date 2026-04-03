import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SlidersHorizontal, Palette, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Glow Card Wrapper ─── */
const GlowCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlowPos({ x, y });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`glow-card relative rounded-3xl overflow-hidden ${className}`}
            style={{
                background: isHovered
                    ? `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,87,34,0.12), transparent 60%)`
                    : 'transparent',
            }}
        >
            {/* Glow border effect */}
            <div
                className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,87,34,0.25), transparent 50%)`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                }}
            />
            <div className="relative z-10 p-6 md:p-10">{children}</div>
        </div>
    );
};

/* ─── Phone Mockup (sin notch — imagen completa) ─── */
const PhoneMockup = ({ src, alt }) => (
    <div className="phone-mockup relative w-[240px] sm:w-[280px] aspect-[9/19] bg-mf-bg rounded-[2.5rem] border-[6px] border-mf-surface-light shadow-2xl overflow-hidden" style={{ perspective: '800px' }}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-[2rem]"
        />
    </div>
);

const AdvancedFeaturesSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        /* ── Section title ── */
        gsap.from('.adv-title', {
            scrollTrigger: {
                trigger: '.adv-title',
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
            },
            y: 60,
            opacity: 0,
        });

        gsap.from('.adv-divider', {
            scrollTrigger: {
                trigger: '.adv-divider',
                start: 'top 85%',
                end: 'top 65%',
                scrub: 1,
            },
            width: 0,
            opacity: 0,
        });

        /* ── GlowCards float up with scrub ── */
        gsap.utils.toArray('.glow-card').forEach((card) => {
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

        /* ── Text content slides in from left/right ── */
        gsap.utils.toArray('.adv-text-left').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    end: 'top 55%',
                    scrub: 1,
                },
                x: -80,
                opacity: 0,
            });
        });

        gsap.utils.toArray('.adv-text-right').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    end: 'top 55%',
                    scrub: 1,
                },
                x: 80,
                opacity: 0,
            });
        });

        /* ── Phone Mockups — 3D depth parallax on scroll ── */
        gsap.utils.toArray('.phone-mockup').forEach((mockup) => {
            gsap.to(mockup, {
                scrollTrigger: {
                    trigger: mockup,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                rotateY: 15,
                rotateX: -5,
                scale: 1.05,
                ease: 'none',
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="advanced" className="relative min-h-screen py-24 px-4 z-10 bg-mf-surface-light border-y border-mf-surface-light w-full flex flex-col items-center snap-start">
            <div className="max-w-7xl mx-auto w-full">

                <div className="text-center mb-20">
                    <h2 className="adv-title text-3xl md:text-5xl font-bold mb-4">
                        Características <span className="text-mf-accent">Avanzadas</span>
                    </h2>
                    <div className="adv-divider w-20 h-1 bg-mf-accent mx-auto rounded-full" />
                </div>

                <div className="space-y-16">

                    {/* Feature 1: EQ */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="adv-text-left flex-1 order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <SlidersHorizontal className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Sonido Hi-Fi Amplificado</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    Toma el control absoluto de tus frecuencias. Nuestro ecualizador integrado de grado audiófilo no solo mejora el sonido estándar, sino que cuenta con un preamplificador capaz de exprimir hasta el último decibelio de tus auriculares y altavoces Android.
                                </p>
                            </div>
                            <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
                                <PhoneMockup src="/Ecualizador.jpg" alt="Ecualizador Hi-Fi" />
                            </div>
                        </div>
                    </GlowCard>

                    {/* Feature 2: Themes */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 w-full flex justify-center">
                                <PhoneMockup src="/Personalizacion.jpg" alt="Personalización Total" />
                            </div>
                            <div className="adv-text-right flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <Palette className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Personalización Total</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    Music Frito se adapta a ti. Usa nuestro motor de temas dinámico para cambiar la paleta de colores de toda la interfaz, desde los acentos hasta el fondo. Elige un diseño oscuro profundo para la noche, o haz que la app combine con la portada del álbum actual.
                                </p>
                            </div>
                        </div>
                    </GlowCard>

                    {/* Feature 3: Sharing */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="adv-text-left flex-1 order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <Share2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Compartir de Verdad</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    No compartas un enlace temporal. Con Music Frito, activa el modo Social Sharing para enviar el <em>archivo de audio completo</em> directamente a través de WhatsApp, Telegram o Bluetooth, adjuntando automáticamente los metadatos y tu descripción al mensaje.
                                </p>
                            </div>
                            <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
                                <PhoneMockup src="/Reproductor.jpg" alt="Compartir de Verdad" />
                            </div>
                        </div>
                    </GlowCard>

                </div>
            </div>
        </section>
    );
};

export default AdvancedFeaturesSection;
