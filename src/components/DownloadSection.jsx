import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Download, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DownloadSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        /* ── Title reveal ── */
        gsap.from('.dl-title', {
            scrollTrigger: {
                trigger: '.dl-title',
                start: 'top 85%',
                end: 'top 55%',
                scrub: 1,
            },
            y: 60,
            opacity: 0,
        });

        /* ── Subtitle reveal ── */
        gsap.from('.dl-subtitle', {
            scrollTrigger: {
                trigger: '.dl-subtitle',
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
            },
            y: 40,
            opacity: 0,
        });

        /* ── Button slide up ── */
        gsap.from('.dl-button-area', {
            scrollTrigger: {
                trigger: '.dl-button-area',
                start: 'top 90%',
                end: 'top 65%',
                scrub: 1,
            },
            y: 50,
            opacity: 0,
        });

        /* ── Animated counter: 0 → 112MB ── */
        const sizeEl = sectionRef.current?.querySelector('.size-counter');
        if (sizeEl) {
            const counter = { val: 0 };
            gsap.to(counter, {
                val: 112,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.download-stats',
                    start: 'top 80%',
                },
                onUpdate: () => {
                    sizeEl.textContent = Math.round(counter.val) + 'MB';
                },
            });
        }

        /* ── Phone mockup entrance + 3D parallax ── */
        const mockup = sectionRef.current?.querySelector('.dl-phone-mockup');
        if (mockup) {
            gsap.from(mockup, {
                scrollTrigger: {
                    trigger: mockup,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: 1,
                },
                x: 100,
                opacity: 0,
                rotate: -5,
            });

            gsap.to(mockup, {
                scrollTrigger: {
                    trigger: mockup,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                rotateY: 12,
                rotateX: -4,
                scale: 1.04,
                ease: 'none',
            });
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="download" className="relative py-24 px-4 z-10 w-full overflow-hidden snap-start">

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-mf-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 bg-gradient-to-br from-mf-surface-light/80 to-mf-surface/40 p-8 md:p-16 rounded-[3rem] border border-mf-surface-light shadow-2xl backdrop-blur-sm">

                {/* Left: Content & Button */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="dl-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        Toma el control de tu biblioteca musical <span className="text-mf-primary">hoy mismo</span>.
                    </h2>

                    <p className="dl-subtitle text-xl text-mf-text-muted mb-10 max-w-xl mx-auto lg:mx-0">
                        Libérate de las suscripciones mensuales y los anuncios. Vuelve a disfrutar la música pura y dura.
                    </p>

                    <div className="dl-button-area flex flex-col items-center lg:items-start gap-4">
                        {/* Botón de descarga APK - GitHub Releases */}
                        <a
                            href="https://github.com/kurtcobain2728/Web-Frito-Music/releases/download/v1.0.0/Music.Frito.v1.apk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 bg-mf-primary hover:bg-mf-primary-hover text-white text-lg font-bold rounded-2xl overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(255,87,34,0.6)] hover:shadow-[0_0_60px_-15px_rgba(255,87,34,0.8)] hover:-translate-y-1"
                        >
                            <Download className="w-6 h-6 group-hover:animate-bounce" />
                            Descargar Music Frito (APK)
                        </a>
                        <div className="download-stats flex items-center gap-2 text-sm text-mf-text-muted font-medium ml-2">
                            <Info className="w-4 h-4" />
                            <span>Versión 1.0.0 • <span className="size-counter">0MB</span> • Android 8.0+</span>
                        </div>

                        {/* Botón de Play Store - Próximamente */}
                        <div className="flex items-center gap-3 mt-2 w-full sm:w-auto">
                            <button
                                disabled
                                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-mf-surface border border-mf-surface-light text-mf-text-muted font-bold rounded-2xl cursor-not-allowed opacity-80 transition-all"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.193 1.27a1.005 1.005 0 0 1 0 1.742l-2.193 1.27-2.537-2.54 2.537-2.542zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                                </svg>
                                Google Play
                            </button>
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-mf-accent/15 text-mf-accent text-sm font-semibold rounded-full border border-mf-accent/30">
                                <span className="w-2 h-2 bg-mf-accent rounded-full animate-pulse" />
                                Próximamente
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Mockup con Musica.jpg */}
                <div
                    className="dl-phone-mockup flex-1 w-full max-w-sm mx-auto aspect-[9/19] bg-mf-bg rounded-[2.5rem] border-8 border-mf-surface-light shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-mf-primary/50 transition-colors"
                    style={{ perspective: '800px' }}
                >
                    <img
                        src="/Musica.jpg"
                        alt="Music Frito App"
                        className="w-full h-full object-cover rounded-[1.8rem]"
                    />
                </div>

            </div>
        </section>
    );
};

export default DownloadSection;
