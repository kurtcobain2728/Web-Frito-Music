import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 w-full bg-gradient-to-b from-mf-bg to-[#060608] border-t border-mf-surface-light">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Column 1: Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="Music Frito"
                                className="w-10 h-10 rounded-xl object-cover shadow-lg"
                            />
                            <span className="font-extrabold text-xl tracking-tight text-white">Music Frito</span>
                        </div>
                        <p className="text-mf-text-muted text-sm leading-relaxed max-w-xs mb-6">
                            Tu reproductor de música offline premium. Sin anuncios, sin suscripciones, sin interrupciones. La música como debe ser.
                        </p>
                        {/* Social & Partner */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/frito.corp?igsh=d21idXFyOHJpYmJl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-mf-surface border border-mf-surface-light flex items-center justify-center text-mf-text-muted hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            </a>
                            <a
                                href="https://ramirezicode.com.ve"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-mf-surface border border-mf-surface-light text-mf-text-muted text-xs font-medium hover:text-white hover:border-mf-primary/50 hover:bg-mf-primary/10 transition-all"
                            >
                                <ExternalLink className="w-3 h-3" />
                                ramirezicode.com.ve
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Plataforma */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Plataforma</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/#features" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Características
                                </a>
                            </li>
                            <li>
                                <a href="/#advanced" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Funciones Avanzadas
                                </a>
                            </li>
                            <li>
                                <a href="/#download" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Descargar APK
                                </a>
                            </li>
                            <li>
                                <a href="/#donate" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Donaciones
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Soporte */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Soporte</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/politica-de-privacidad" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to="/terminos-de-uso" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Términos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Contacto Directo
                                </Link>
                            </li>
                            <li>
                                <a href="/#about" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors flex items-center gap-2">
                                    <span className="w-1 h-1 bg-mf-primary/60 rounded-full" />
                                    Sobre Nosotros
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contáctanos */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contáctanos</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-1.5 bg-mf-primary/10 rounded-lg text-mf-primary mt-0.5 flex-shrink-0">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-mf-text-muted text-sm">San Juan de los Morros, Guárico, VE</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1.5 bg-mf-primary/10 rounded-lg text-mf-primary mt-0.5 flex-shrink-0">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <a href="mailto:soportefritomusic@ramirezicode.com.ve" className="text-mf-text-muted text-sm hover:text-mf-primary transition-colors break-all">
                                    soportefritomusic@ramirezicode.com.ve
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-mf-surface-light/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-mf-text-muted/60 text-xs text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Music Frito. Todos los derechos reservados. · Hecho con ❤️ en Venezuela 🇻🇪
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-mf-surface border border-mf-surface-light rounded-xl text-mf-text-muted text-xs font-medium hover:text-white hover:border-mf-primary/50 hover:bg-mf-primary/10 transition-all hover:-translate-y-0.5"
                    >
                        <ArrowUp className="w-3.5 h-3.5" />
                        Volver arriba
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
