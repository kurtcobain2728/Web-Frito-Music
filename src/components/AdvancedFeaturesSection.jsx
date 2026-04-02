import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Palette, Share2 } from 'lucide-react';

const AdvancedFeaturesSection = () => {
    return (
        <section id="advanced" className="relative min-h-screen py-24 px-4 z-10 bg-mf-surface-light border-y border-mf-surface-light w-full flex flex-col items-center">
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

                <div className="space-y-24">

                    {/* Feature 1: EQ */}
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
                            className="flex-1 order-1 md:order-2 w-full aspect-video md:aspect-[4/3] bg-mf-surface rounded-2xl border border-dashed border-mf-surface-light flex items-center justify-center text-mf-text-muted font-medium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            [ APP SCREENSHOT: EQUALIZER ]
                        </motion.div>
                    </div>

                    {/* Feature 2: Themes */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            className="flex-1 w-full aspect-video md:aspect-[4/3] bg-mf-surface rounded-2xl border border-dashed border-mf-surface-light flex items-center justify-center text-mf-text-muted font-medium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            [ APP SCREENSHOT: THEME DEMO ]
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

                    {/* Feature 3: Sharing */}
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
                            className="flex-1 order-1 md:order-2 w-full aspect-video md:aspect-[4/3] bg-mf-surface rounded-2xl border border-dashed border-mf-surface-light flex items-center justify-center text-mf-text-muted font-medium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            [ APP SCREENSHOT: SHARE SHEET ]
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvancedFeaturesSection;
