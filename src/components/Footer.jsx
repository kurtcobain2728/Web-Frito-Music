import React from 'react';

const Footer = () => {
    return (
        <footer className="relative py-8 px-4 z-10 w-full border-t border-mf-surface-light bg-mf-bg text-center text-sm font-medium text-mf-text-muted flex flex-col items-center">
            <div className="flex items-center gap-6 mb-4">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
            <p>
                &copy; {new Date().getFullYear()} Music Frito. Hecho para los amantes de la música local.
            </p>
        </footer>
    );
};

export default Footer;
