import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Palette, Share2 } from 'lucide-react';

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
            className={`relative rounded-3xl overflow-hidden ${className}`}
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
    <div className="relative w-[240px] sm:w-[280px] aspect-[9/19] bg-mf-bg rounded-[2.5rem] border-[6px] border-mf-surface-light shadow-2xl overflow-hidden">
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-[2rem]"
        />
    </div>
);

const AdvancedFeaturesSection = () => {
    return (
        <section id="advanced" className="relative min-h-screen py-24 px-4 z-10 bg-mf-surface-light border-y border-mf-surface-light w-full flex flex-col items-center snap-start">
            <div className="max-w-7xl mx-auto w-full">

                <div className="text-center mb-20">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Características <span className="text-mf-accent">Avanzadas</span>
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-mf-accent mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    />
                </div>

                <div className="space-y-16">

                    {/* Feature 1: EQ */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <motion.div
                                className="flex-1 order-2 md:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <SlidersHorizontal className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Sonido Hi-Fi Amplificado</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    Toma el control absoluto de tus frecuencias. Nuestro ecualizador integrado de grado audiófilo no solo mejora el sonido estándar, sino que cuenta con un preamplificador capaz de exprimir hasta el último decibelio de tus auriculares y altavoces Android.
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex-1 order-1 md:order-2 w-full flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <PhoneMockup src="/Ecualizador.jpg" alt="Ecualizador Hi-Fi" />
                            </motion.div>
                        </div>
                    </GlowCard>

                    {/* Feature 2: Themes */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <motion.div
                                className="flex-1 w-full flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <PhoneMockup src="/Personalizacion.jpg" alt="Personalización Total" />
                            </motion.div>
                            <motion.div
                                className="flex-1"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <Palette className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Personalización Total</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    Music Frito se adapta a ti. Usa nuestro motor de temas dinámico para cambiar la paleta de colores de toda la interfaz, desde los acentos hasta el fondo. Elige un diseño oscuro profundo para la noche, o haz que la app combine con la portada del álbum actual.
                                </p>
                            </motion.div>
                        </div>
                    </GlowCard>

                    {/* Feature 3: Sharing */}
                    <GlowCard className="bg-mf-surface/30 border border-mf-surface-light/50">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <motion.div
                                className="flex-1 order-2 md:order-1"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-mf-surface rounded-xl text-mf-accent">
                                        <Share2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">Compartir de Verdad</h3>
                                </div>
                                <p className="text-mf-text-muted text-lg leading-relaxed">
                                    No compartas un enlace temporal. Con Music Frito, activa el modo Social Sharing para enviar el <em>archivo de audio completo</em> directamente a través de WhatsApp, Telegram o Bluetooth, adjuntando automáticamente los metadatos y tu descripción al mensaje.
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex-1 order-1 md:order-2 w-full flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <PhoneMockup src="/Reproductor.jpg" alt="Compartir de Verdad" />
                            </motion.div>
                        </div>
                    </GlowCard>

                </div>
            </div>
        </section>
    );
};

export default AdvancedFeaturesSection;
