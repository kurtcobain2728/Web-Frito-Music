import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PlayCircle, PauseCircle } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const HeroSection = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

    /* ─── GSAP Cinematic Timeline ─── */
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-logo', { scale: 0, rotation: 360, duration: 1.2 })
          .from('.hero-title-char', {
              y: 50,
              opacity: 0,
              rotateX: -90,
              stagger: 0.03,
              duration: 0.6,
              ease: 'back.out(1.7)',
          }, '-=0.4')
          .from('.hero-subtitle', { y: 60, opacity: 0, duration: 0.6 }, '-=0.3')
          .from('.hero-video', {
              y: 80,
              opacity: 0,
              scale: 0.9,
              duration: 0.8,
          }, '-=0.2');
    }, { scope: sectionRef });

    // Auto-play video when scrolled into view
    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAutoPlayed) {
                        video.play().catch(() => {});
                        setHasAutoPlayed(true);
                    } else if (!entry.isIntersecting && isPlaying) {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [hasAutoPlayed, isPlaying]);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

    /* ─── Split text into individual chars for letter-by-letter animation ─── */
    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <span
                key={i}
                className="hero-title-char inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section ref={sectionRef} id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-4 text-center z-10 snap-start">

            {/* Animated Logo Container */}
            <div className="hero-logo w-48 h-48 md:w-64 md:h-64 mb-8">
                <AnimatedLogo />
            </div>

            <h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white"
                style={{ perspective: '600px' }}
            >
                {splitText('Tu música, tus reglas.')}
                <br />
                {splitText('Sin conexión.')}
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-mf-text-muted max-w-2xl mb-12">
                El reproductor offline con interfaz premium y cero interrupciones que estabas esperando.
            </p>

            {/* Video Promocional */}
            <div
                ref={containerRef}
                className="hero-video w-full max-w-4xl aspect-video rounded-2xl border-2 border-mf-surface-light bg-mf-surface/50 backdrop-blur-sm mb-12 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-mf-primary/50 transition-colors"
                onClick={toggleVideo}
            >
                <video
                    ref={videoRef}
                    src="/promo.mp4"
                    className="w-full h-full object-cover object-center rounded-2xl"
                    playsInline
                    muted
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                />
                {/* Play/Pause overlay */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    {isPlaying ? (
                        <PauseCircle className="w-16 h-16 text-white/80 drop-shadow-lg" />
                    ) : (
                        <PlayCircle className="w-16 h-16 text-white/80 drop-shadow-lg" />
                    )}
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
