import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, Download, RefreshCw, Users, Gavel, Copyright, Ban, Globe, Mail } from 'lucide-react';

const Section = ({ icon: Icon, title, children, delay = 0 }) => (
    <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-mf-accent/10 rounded-xl text-mf-accent">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-mf-text-main">{title}</h2>
        </div>
        <div className="text-mf-text-muted leading-relaxed space-y-3 pl-[52px]">
            {children}
        </div>
    </motion.div>
);

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <span className="font-bold text-lg">Términos de Uso</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Hero */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-20 h-20 bg-mf-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-mf-accent/20">
                        <FileText className="w-10 h-10 text-mf-accent" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4">Términos de Uso</h1>
                    <p className="text-mf-text-muted text-lg max-w-2xl mx-auto">
                        Al descargar y utilizar Music Frito, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente.
                    </p>
                    <p className="text-mf-text-muted/60 text-sm mt-4">Última actualización: Abril 2026</p>
                </motion.div>

                {/* Sections */}
                <div className="bg-mf-surface/60 backdrop-blur-sm rounded-3xl border border-mf-surface-light p-6 md:p-10">

                    <Section icon={Scale} title="1. Aceptación de los Términos" delay={0.1}>
                        <p>Al acceder, descargar o utilizar la aplicación Music Frito (en adelante, "la Aplicación"), aceptas quedar vinculado por estos Términos de Uso. Si no estás de acuerdo con alguno de estos términos, no deberás usar la Aplicación.</p>
                        <p>Estos términos constituyen un acuerdo legal entre tú (el "Usuario") y el equipo de desarrollo de Music Frito (en adelante, "Nosotros" o "Music Frito").</p>
                    </Section>

                    <Section icon={FileText} title="2. Descripción del Servicio" delay={0.15}>
                        <p>Music Frito es un <strong className="text-mf-text-main">reproductor de música offline</strong> para dispositivos Android que permite reproducir archivos de audio almacenados localmente en tu dispositivo.</p>
                        <p>La Aplicación es proporcionada "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas.</p>
                        <p>Music Frito no es un servicio de streaming ni proporciona contenido musical. El contenido reproducido es exclusivamente propiedad y responsabilidad del usuario.</p>
                    </Section>

                    <Section icon={Download} title="3. Descarga e Instalación" delay={0.2}>
                        <p>La Aplicación se distribuye como un archivo APK descargable desde nuestro sitio web oficial. Al instalarla, es posible que tu dispositivo muestre advertencias de seguridad por tratarse de una instalación fuera de Google Play Store.</p>
                        <p>Para instalar la Aplicación, deberás habilitar la instalación de aplicaciones de orígenes desconocidos en la configuración de tu dispositivo Android.</p>
                        <p>Nos comprometemos a que el archivo APK distribuido desde nuestro sitio web oficial esté libre de malware, virus o código malicioso. Sin embargo, no nos hacemos responsables de archivos APK obtenidos desde fuentes no oficiales.</p>
                    </Section>

                    <Section icon={Users} title="4. Uso Permitido" delay={0.25}>
                        <p>El Usuario se compromete a utilizar Music Frito de manera responsable y conforme a la ley. Está permitido:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Reproducir archivos de audio que sean de tu propiedad o sobre los cuales tengas derechos legítimos de uso.</li>
                            <li>Crear playlists, gestionar favoritos y personalizar la experiencia según tus preferencias.</li>
                            <li>Compartir archivos de audio a través de las funciones integradas de la Aplicación, siempre que tengas los derechos necesarios sobre dicho contenido.</li>
                            <li>Modificar las configuraciones del ecualizador y el tema de la interfaz.</li>
                        </ul>
                    </Section>

                    <Section icon={Ban} title="5. Uso Prohibido" delay={0.3}>
                        <p>Queda estrictamente prohibido:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-mf-text-main">Ingeniería inversa:</strong> Descompilar, desensamblar o intentar obtener el código fuente de la Aplicación.</li>
                            <li><strong className="text-mf-text-main">Distribución no autorizada:</strong> Redistribuir, sublicenciar o vender la Aplicación o cualquier parte de ella.</li>
                            <li><strong className="text-mf-text-main">Modificación:</strong> Crear obras derivadas, alterar o modificar la Aplicación sin autorización expresa.</li>
                            <li><strong className="text-mf-text-main">Uso ilegal:</strong> Utilizar la Aplicación para reproducir o distribuir contenido protegido por derechos de autor sin la debida autorización.</li>
                            <li><strong className="text-mf-text-main">Uso comercial:</strong> Utilizar la Aplicación con fines comerciales sin acuerdo previo por escrito.</li>
                        </ul>
                    </Section>

                    <Section icon={Copyright} title="6. Propiedad Intelectual" delay={0.35}>
                        <p>Music Frito, incluyendo pero no limitado a su código fuente, diseño de interfaz, logotipos, iconografía, animaciones y documentación, es propiedad exclusiva del equipo de desarrollo de Music Frito.</p>
                        <p>Todos los derechos de propiedad intelectual están reservados. Nada en estos Términos te otorga propiedad alguna sobre la Aplicación; únicamente recibes una <strong className="text-mf-text-main">licencia limitada, no exclusiva, intransferible y revocable</strong> para usar la Aplicación conforme a estos Términos.</p>
                        <p>Las marcas comerciales, nombres comerciales y logotipos de Music Frito no pueden ser utilizados sin nuestro consentimiento previo por escrito.</p>
                    </Section>

                    <Section icon={AlertTriangle} title="7. Limitación de Responsabilidad" delay={0.4}>
                        <p>En la máxima medida permitida por la ley aplicable:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Music Frito <strong className="text-mf-text-main">no será responsable</strong> de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso o la imposibilidad de uso de la Aplicación.</li>
                            <li>No garantizamos que la Aplicación sea compatible con todos los dispositivos Android o versiones del sistema operativo.</li>
                            <li>No somos responsables del contenido de audio que el usuario reproduzca ni de los derechos de autor asociados a dicho contenido.</li>
                            <li>No nos hacemos responsables de la pérdida de datos locales debido a mal funcionamiento del dispositivo, actualizaciones del sistema operativo o eliminación accidental.</li>
                        </ul>
                    </Section>

                    <Section icon={RefreshCw} title="8. Actualizaciones" delay={0.45}>
                        <p>Podemos lanzar actualizaciones de la Aplicación periódicamente para corregir errores, mejorar el rendimiento o agregar nuevas funcionalidades.</p>
                        <p>Las actualizaciones estarán disponibles en nuestro sitio web oficial. No estamos obligados a proporcionar actualizaciones, soporte técnico o mantenimiento continuo de la Aplicación.</p>
                        <p>El uso de versiones desactualizadas es responsabilidad del usuario. Recomendamos siempre utilizar la versión más reciente disponible.</p>
                    </Section>

                    <Section icon={Gavel} title="9. Donaciones" delay={0.5}>
                        <p>Music Frito es una aplicación gratuita que se sostiene mediante donaciones voluntarias de sus usuarios.</p>
                        <p>Las donaciones realizadas a través de los métodos proporcionados (Binance, Bitget u otros) son <strong className="text-mf-text-main">completamente voluntarias y no reembolsables</strong>.</p>
                        <p>Realizar una donación no otorga al usuario derechos adicionales, acceso preferencial o influencia sobre el desarrollo de la Aplicación.</p>
                    </Section>

                    <Section icon={Globe} title="10. Legislación Aplicable" delay={0.55}>
                        <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Bolivariana de Venezuela, sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
                        <p>Cualquier disputa que surja en relación con estos Términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Venezuela.</p>
                    </Section>

                    <Section icon={Mail} title="11. Contacto" delay={0.6}>
                        <p>Si tienes preguntas sobre estos Términos de Uso, puedes contactarnos a través de nuestra <Link to="/contacto" className="text-mf-accent hover:underline">página de contacto</Link>.</p>
                        <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor inmediatamente después de su publicación.</p>
                        <p>El uso continuado de la Aplicación después de cualquier modificación constituye tu aceptación de los nuevos Términos.</p>
                    </Section>
                </div>

                {/* Back link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-mf-accent hover:underline font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </motion.div>
            </main>
        </div>
    );
};

export default TermsOfUse;
