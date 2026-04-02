import React from 'react';
import { motion } from 'framer-motion';
import { Download, Info } from 'lucide-react';

const DownloadSection = () => {
    return (
        <section id="download" className="relative py-24 px-4 z-10 w-full overflow-hidden">

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-mf-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 bg-gradient-to-br from-mf-surface-light/80 to-mf-surface/40 p-8 md:p-16 rounded-[3rem] border border-mf-surface-light shadow-2xl backdrop-blur-sm">

                {/* Left: Content & Button */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Toma el control de tu biblioteca musical <span className="text-mf-primary">hoy mismo</span>.
                    </motion.h2>

                    <motion.p
                        className="text-xl text-mf-text-muted mb-10 max-w-xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Libérate de las suscripciones mensuales y los anuncios. Vuelve a disfrutar la música pura y dura.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center lg:items-start gap-4"
                    >
                        <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 bg-mf-primary hover:bg-mf-primary-hover text-white text-lg font-bold rounded-2xl overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(255,87,34,0.6)] hover:shadow-[0_0_60px_-15px_rgba(255,87,34,0.8)] hover:-translate-y-1">
                            <Download className="w-6 h-6 group-hover:animate-bounce" />
                            Descargar Music Frito (APK)
                        </button>
                        <div className="flex items-center gap-2 text-sm text-mf-text-muted font-medium ml-2">
                            <Info className="w-4 h-4" />
                            <span>Versión 1.0.4 • 24MB • Android 8.0+</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Mockup Placeholder */}
                <motion.div
                    className="flex-1 w-full max-w-sm mx-auto aspect-[9/19] bg-mf-bg rounded-[2.5rem] border-8 border-mf-surface-light shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-mf-primary/50 transition-colors"
                    initial={{ opacity: 0, x: 50, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <div className="absolute top-0 w-1/2 h-6 bg-mf-surface-light rounded-b-xl" /> {/* Notch */}
                    <span className="text-mf-text-muted font-bold rotate-[-45deg] select-none">
                        [ MOCKUP_APP_FINAL ]
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default DownloadSection;
