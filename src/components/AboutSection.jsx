import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="relative py-24 px-4 z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

            <motion.div
                className="w-16 h-16 bg-mf-surface rounded-full flex items-center justify-center text-mf-primary mb-8 border border-mf-surface-light"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <Headphones className="w-8 h-8" />
            </motion.div>

            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Pasión por el Audio <span className="text-mf-primary">Independiente</span>
            </motion.h2>

            <motion.div
                className="space-y-6 text-lg text-mf-text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <p>
                    Somos un equipo de desarrolladores audiófilos que nos cansamos del modelo actual de suscripciones, anuncios intrusivos y experiencias fragmentadas. Creemos que si tú eres dueño del archivo, deberías ser dueño de la forma en que lo escuchas.
                </p>
                <p>
                    Music Frito nació de la necesidad de tener un reproductor verdaderamente premium para quienes aún valoran descargar su música en alta fidelidad y organizarla meticulosamente. No recolectamos tus hábitos de escucha, no necesitas crear cuentas, y nunca interrumpiremos un solo con publicidad.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutSection;
