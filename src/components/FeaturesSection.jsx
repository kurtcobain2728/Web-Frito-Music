import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Music, FolderTree } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={`bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-3xl p-8 hover:border-mf-primary/30 transition-colors ${className}`}
    >
        <div className="w-14 h-14 rounded-2xl bg-mf-surface-light/50 flex items-center justify-center mb-6 text-mf-primary">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-mf-text-muted leading-relaxed">{description}</p>
    </motion.div>
);

const FeaturesSection = () => {
    return (
        <section id="features" className="relative min-h-screen py-24 px-4 z-10 w-full max-w-7xl mx-auto flex flex-col justify-center">

            <div className="text-center mb-16 md:mb-24">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    ¿Qué es <span className="text-mf-primary">Music Frito</span>?
                </motion.h2>
                <motion.p
                    className="text-xl text-mf-text-muted max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    La filosofía es simple: una experiencia audiófila sin distracciones, centrada en tu propia biblioteca.
                </motion.p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                    icon={HardDrive}
                    title="Reproducción Local Total"
                    description="Olvida el streaming y las conexiones a internet. Escucha tus archivos MP3, FLAC, WAV o AAC directamente desde el almacenamiento interno de tu dispositivo sin límite de saltos."
                    delay={0.1}
                    className="lg:col-span-2"
                />

                <FeatureCard
                    icon={Music}
                    title="Interfaz Premium"
                    description="Navegación fluida, moderna y familiar inspirada en las grandes apps de streaming, pero con la inmediatez que solo el almacenamiento local puede ofrecer."
                    delay={0.2}
                />

                <FeatureCard
                    icon={FolderTree}
                    title="Organización Inteligente"
                    description="Escanea tu dispositivo, crea playlists, gestiona favoritos dinámicos y navega por carpetas físicas fácilmente con nuestra indexación ultrarrápida."
                    delay={0.3}
                    className="lg:col-span-3 lg:grid-cols-2" // This allows content to stretch if needed, though simple styling is enough here
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
