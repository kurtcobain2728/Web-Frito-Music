import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const HeroSection = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

    // Auto-play when scrolled into view using IntersectionObserver
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

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-4 text-center z-10 snap-start">

            {/* Animated Logo Container */}
            <div className="w-48 h-48 md:w-64 md:h-64 mb-8">
                <AnimatedLogo />
            </div>

            <motion.h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                Tu música, tus reglas.<br />Sin conexión.
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-mf-text-muted max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
            >
                El reproductor offline con interfaz premium y cero interrupciones que estabas esperando.
            </motion.p>

            {/* Video Promocional */}
            <motion.div
                ref={containerRef}
                className="w-full max-w-4xl aspect-video rounded-2xl border-2 border-mf-surface-light bg-mf-surface/50 backdrop-blur-sm mb-12 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-mf-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
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
            </motion.div>

        </section>
    );
};

export default HeroSection;
