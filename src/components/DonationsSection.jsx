import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Bitcoin, X, Copy, Check, Clock } from 'lucide-react';

const DonationsSection = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [copiedWallet, setCopiedWallet] = useState(null);

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedWallet(id);
        setTimeout(() => setCopiedWallet(null), 2000);
    };

    const closeModal = () => {
        setActiveModal(null);
        setCopiedWallet(null);
    };

    /* ── Modal Content (rendered via Portal) ── */
    const modalContent = (
        <AnimatePresence>
            {activeModal && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        className="bg-mf-surface border border-mf-surface-light rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 rounded-full bg-mf-surface-light/50 hover:bg-mf-surface-light text-mf-text-muted hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* PayPal Modal - Próximamente */}
                        {activeModal === 'paypal' && (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Clock className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">PayPal</h3>
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                    Próximamente
                                </div>
                                <p className="text-mf-text-muted leading-relaxed">
                                    Estamos preparando la integración con PayPal para que puedas apoyar el proyecto de la forma más cómoda. ¡Mantente atento a las novedades!
                                </p>
                            </div>
                        )}

                        {/* Binance Modal - 2 redes */}
                        {activeModal === 'binance' && (
                            <div>
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-yellow-500/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Bitcoin className="w-8 h-8 text-yellow-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">Binance (USDT)</h3>
                                    <p className="text-mf-text-muted text-sm">Selecciona la red para enviar tu donación</p>
                                </div>

                                <div className="space-y-4">
                                    {/* TRC20 */}
                                    <div className="bg-mf-bg rounded-2xl p-5 border border-mf-surface-light">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2.5 py-1 bg-yellow-500/15 text-yellow-400 text-xs font-bold rounded-lg uppercase tracking-wider">TRC20</span>
                                            <span className="text-mf-text-muted text-sm">(Tron)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 text-xs sm:text-sm text-mf-text-main bg-mf-surface-light/50 px-3 py-2.5 rounded-lg break-all font-mono select-all">
                                                TSHHubFoj3UxYamGe3FY2211TS7tooJGCm
                                            </code>
                                            <button
                                                onClick={() => copyToClipboard('TSHHubFoj3UxYamGe3FY2211TS7tooJGCm', 'trc20')}
                                                className="p-2.5 bg-mf-surface-light hover:bg-yellow-500/20 rounded-lg transition-colors flex-shrink-0"
                                                title="Copiar dirección"
                                            >
                                                {copiedWallet === 'trc20' ? (
                                                    <Check className="w-4 h-4 text-mf-accent" />
                                                ) : (
                                                    <Copy className="w-4 h-4 text-mf-text-muted" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* BEP20 */}
                                    <div className="bg-mf-bg rounded-2xl p-5 border border-mf-surface-light">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2.5 py-1 bg-yellow-500/15 text-yellow-400 text-xs font-bold rounded-lg uppercase tracking-wider">BEP20</span>
                                            <span className="text-mf-text-muted text-sm">(Binance Smart Chain)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 text-xs sm:text-sm text-mf-text-main bg-mf-surface-light/50 px-3 py-2.5 rounded-lg break-all font-mono select-all">
                                                0x73b535be4e94e123f4c08c860d1760a2a26fb744
                                            </code>
                                            <button
                                                onClick={() => copyToClipboard('0x73b535be4e94e123f4c08c860d1760a2a26fb744', 'bep20')}
                                                className="p-2.5 bg-mf-surface-light hover:bg-yellow-500/20 rounded-lg transition-colors flex-shrink-0"
                                                title="Copiar dirección"
                                            >
                                                {copiedWallet === 'bep20' ? (
                                                    <Check className="w-4 h-4 text-mf-accent" />
                                                ) : (
                                                    <Copy className="w-4 h-4 text-mf-text-muted" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Bitget Modal - ID de usuario */}
                        {activeModal === 'bitget' && (
                            <div>
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-cyan-500/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Bitcoin className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">Bitget (USDT)</h3>
                                    <p className="text-mf-text-muted text-sm">Envía tu donación usando el ID de usuario</p>
                                </div>

                                <div className="bg-mf-bg rounded-2xl p-5 border border-mf-surface-light">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2.5 py-1 bg-cyan-500/15 text-cyan-400 text-xs font-bold rounded-lg uppercase tracking-wider">ID de Usuario</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <code className="flex-1 text-lg text-mf-text-main bg-mf-surface-light/50 px-4 py-3 rounded-lg text-center font-mono font-bold tracking-widest select-all">
                                            7191013122
                                        </code>
                                        <button
                                            onClick={() => copyToClipboard('7191013122', 'bitget')}
                                            className="p-2.5 bg-mf-surface-light hover:bg-cyan-500/20 rounded-lg transition-colors flex-shrink-0"
                                            title="Copiar ID"
                                        >
                                            {copiedWallet === 'bitget' ? (
                                                <Check className="w-4 h-4 text-mf-accent" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-mf-text-muted" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <section id="donate" className="relative py-24 px-4 z-10 w-full flex flex-col items-center text-center border-t border-mf-surface-light bg-gradient-to-b from-mf-bg to-mf-surface-light/20 snap-start">

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
                        {/* PayPal - Próximamente */}
                        <motion.button
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-mf-surface hover:bg-mf-surface-light border border-mf-surface-light hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            onClick={() => setActiveModal('paypal')}
                        >
                            <CreditCard className="w-5 h-5 text-mf-text-muted group-hover:text-blue-500 transition-colors" />
                            <span className="text-mf-text-main group-hover:text-white transition-colors">PayPal</span>
                        </motion.button>

                        {/* Binance (USDT) */}
                        <motion.button
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-mf-surface hover:bg-mf-surface-light border border-mf-surface-light hover:border-yellow-500 transition-all hover:-translate-y-1 shadow-lg group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onClick={() => setActiveModal('binance')}
                        >
                            <Bitcoin className="w-5 h-5 text-mf-text-muted group-hover:text-yellow-500 transition-colors" />
                            <span className="text-mf-text-main group-hover:text-white transition-colors">Binance (USDT)</span>
                        </motion.button>

                        {/* Bitget (USDT) */}
                        <motion.button
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-mf-surface hover:bg-mf-surface-light border border-mf-surface-light hover:border-cyan-500 transition-all hover:-translate-y-1 shadow-lg group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            onClick={() => setActiveModal('bitget')}
                        >
                            <Bitcoin className="w-5 h-5 text-mf-text-muted group-hover:text-cyan-500 transition-colors" />
                            <span className="text-mf-text-main group-hover:text-white transition-colors">Bitget (USDT)</span>
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Portal: Modal renderizado directamente en document.body */}
            {createPortal(modalContent, document.body)}
        </>
    );
};

export default DonationsSection;
