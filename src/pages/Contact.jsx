import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, User, Send, MapPin, Clock, Headphones, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div className="relative min-h-screen bg-mf-bg text-mf-text-main overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-mf-bg/80 backdrop-blur-md border-b border-mf-surface-light">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
                    <Link to="/" className="p-2 rounded-xl bg-mf-surface hover:bg-mf-surface-light transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpg" alt="Music Frito" className="w-8 h-8 rounded-lg object-cover" />
                        <span className="font-bold text-lg">Contacto</span>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
                {/* Hero */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                        <MessageSquare className="w-10 h-10 text-blue-400" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4">Contáctanos</h1>
                    <p className="text-mf-text-muted text-lg max-w-2xl mx-auto">
                        ¿Tienes alguna pregunta, sugerencia o necesitas soporte? Estamos aquí para ayudarte.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">

                    {/* Info Cards - Left Side */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {/* Info Card 1 */}
                        <div className="bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-2xl p-6 hover:border-mf-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-mf-primary/10 rounded-xl text-mf-primary">
                                    <Headphones className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg">Soporte Técnico</h3>
                            </div>
                            <p className="text-mf-text-muted text-sm leading-relaxed">
                                ¿Problemas con la reproducción, el ecualizador o la interfaz? Descríbenos tu problema con el mayor detalle posible y te ayudaremos.
                            </p>
                        </div>

                        {/* Info Card 2 */}
                        <div className="bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg">Correo Electrónico</h3>
                            </div>
                            <p className="text-mf-text-muted text-sm leading-relaxed mb-2">
                                También puedes escribirnos directamente a:
                            </p>
                            <a href="mailto:soportefritomusic@ramirezicode.com.ve" className="text-blue-400 hover:underline font-medium text-sm break-all">
                                soportefritomusic@ramirezicode.com.ve
                            </a>
                        </div>

                        {/* Info Card 3 */}
                        <div className="bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-2xl p-6 hover:border-mf-accent/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-mf-accent/10 rounded-xl text-mf-accent">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg">Tiempo de Respuesta</h3>
                            </div>
                            <p className="text-mf-text-muted text-sm leading-relaxed">
                                Respondemos todas las consultas en un plazo máximo de <strong className="text-mf-text-main">48 horas hábiles</strong>. Los fines de semana podría tardar un poco más.
                            </p>
                        </div>

                        {/* Info Card 4 */}
                        <div className="bg-mf-surface/80 backdrop-blur-sm border border-mf-surface-light rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-yellow-500/10 rounded-xl text-yellow-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg">Ubicación</h3>
                            </div>
                            <p className="text-mf-text-muted text-sm leading-relaxed">
                                San Juan de los Morros, Guárico, Venezuela 🇻🇪
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="bg-mf-surface/60 backdrop-blur-sm rounded-3xl border border-mf-surface-light p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

                            {submitted ? (
                                <motion.div
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <div className="w-20 h-20 bg-mf-accent/15 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-mf-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                                    <p className="text-mf-text-muted">Te responderemos lo antes posible. Gracias por contactarnos.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-mf-text-muted mb-2">
                                            Nombre completo
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mf-text-muted/50" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Tu nombre"
                                                className="w-full bg-mf-bg border border-mf-surface-light rounded-xl pl-11 pr-4 py-3.5 text-mf-text-main placeholder:text-mf-text-muted/40 focus:outline-none focus:border-mf-primary/50 focus:ring-1 focus:ring-mf-primary/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-mf-text-muted mb-2">
                                            Correo electrónico
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mf-text-muted/50" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="tu@email.com"
                                                className="w-full bg-mf-bg border border-mf-surface-light rounded-xl pl-11 pr-4 py-3.5 text-mf-text-main placeholder:text-mf-text-muted/40 focus:outline-none focus:border-mf-primary/50 focus:ring-1 focus:ring-mf-primary/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-mf-text-muted mb-2">
                                            Asunto
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-mf-bg border border-mf-surface-light rounded-xl px-4 py-3.5 text-mf-text-main focus:outline-none focus:border-mf-primary/50 focus:ring-1 focus:ring-mf-primary/30 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-mf-text-muted">Selecciona un asunto</option>
                                            <option value="soporte">Soporte Técnico</option>
                                            <option value="sugerencia">Sugerencia de Funcionalidad</option>
                                            <option value="bug">Reporte de Error (Bug)</option>
                                            <option value="colaboracion">Colaboración / Alianza</option>
                                            <option value="donacion">Consulta sobre Donaciones</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-mf-text-muted mb-2">
                                            Mensaje
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-mf-text-muted/50" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Describe tu consulta con el mayor detalle posible..."
                                                className="w-full bg-mf-bg border border-mf-surface-light rounded-xl pl-11 pr-4 py-3.5 text-mf-text-main placeholder:text-mf-text-muted/40 focus:outline-none focus:border-mf-primary/50 focus:ring-1 focus:ring-mf-primary/30 transition-colors resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-mf-primary hover:bg-mf-primary-hover text-white font-bold rounded-xl overflow-hidden transition-all shadow-[0_0_30px_-10px_rgba(255,87,34,0.4)] hover:shadow-[0_0_50px_-10px_rgba(255,87,34,0.6)] hover:-translate-y-0.5"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Enviar Mensaje
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Back link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-mf-primary hover:underline font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </motion.div>
            </main>
        </div>
    );
};

export default Contact;
