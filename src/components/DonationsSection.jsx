import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, CreditCard, Bitcoin } from 'lucide-react';

const DonationButton = ({ icon: Icon, text, colorClass, delay = 0 }) => (
    <motion.button
        className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-mf-surface hover:bg-mf-surface-light border border-mf-surface-light hover:border-${colorClass} transition-all hover:-translate-y-1 shadow-lg group`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <Icon className={`w-5 h-5 text-mf-text-muted group-hover:text-${colorClass} transition-colors`} />
        <span className="text-mf-text-main group-hover:text-white transition-colors">{text}</span>
    </motion.button>
);

const DonationsSection = () => {
    return (
        <section id="donate" className="relative py-24 px-4 z-10 w-full flex flex-col items-center text-center border-t border-mf-surface-light bg-gradient-to-b from-mf-bg to-mf-surface-light/20">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl w-full"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Mantén el proyecto vivo y <span className="text-red-500">sin anuncios</span>
                </h2>
                <p className="text-lg text-mf-text-muted mb-12 leading-relaxed">
                    Music Frito es una aplicación 100% independiente. No vendemos tus datos, no usamos telemetría oscura, y nunca cobraremos una suscripción mensual. Si amas la app, considera invitarnos un café para ayudar a cubrir los costos de los servidores de descarga y las licencias de desarrollo.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                    <DonationButton icon={CreditCard} text="PayPal" colorClass="blue-500" delay={0.1} />
                    <DonationButton icon={Bitcoin} text="Binance (USDT)" colorClass="yellow-500" delay={0.2} />
                    <DonationButton icon={Bitcoin} text="Bitget (USDT)" colorClass="cyan-500" delay={0.3} />
                </div>
            </motion.div>
        </section>
    );
};

export default DonationsSection;
