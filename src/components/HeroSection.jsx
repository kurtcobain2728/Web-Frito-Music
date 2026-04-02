import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Download } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-4 text-center z-10">

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
                El reproductor offline con interfaz premium, ecualizador Hi-Fi y cero interrupciones que estabas esperando.
            </motion.p>

            {/* Video Placeholder Container */}
            <motion.div
                className="w-full max-w-4xl aspect-video rounded-2xl border-2 border-dashed border-mf-surface-light bg-mf-surface/50 backdrop-blur-sm flex flex-col items-center justify-center mb-12 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-mf-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
            >
                <PlayCircle className="w-16 h-16 text-mf-text-muted group-hover:text-mf-primary transition-colors mb-4" />
                <span className="text-mf-text-muted font-medium tracking-wide">[ VIDEO_PROMOCIONAL_MODERNO ]</span>
            </motion.div>

            <motion.button
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-mf-primary hover:bg-mf-primary-hover text-white font-bold rounded-full overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(255,87,34,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,87,34,0.7)] hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8 }}
            >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Descargar APK Gratis
            </motion.button>
        </section>
    );
};

export default HeroSection;
