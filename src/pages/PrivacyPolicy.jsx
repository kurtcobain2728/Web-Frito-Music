import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe, Bell, Trash2, Mail } from 'lucide-react';

const Section = ({ icon: Icon, title, children, delay = 0 }) => (
    <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-mf-primary/10 rounded-xl text-mf-primary">
                <Icon className="w-5 h-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-mf-text-main">{title}</h2>
        </div>
        <div className="text-mf-text-muted leading-relaxed space-y-3 pl-[52px]">
            {children}
        </div>
    </motion.div>
);

const PrivacyPolicy = () => {
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
                        <span className="font-bold text-lg">Política de Privacidad</span>
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
                    <div className="w-20 h-20 bg-mf-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-mf-primary/20">
                        <Shield className="w-10 h-10 text-mf-primary" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4">Política de Privacidad</h1>
                    <p className="text-mf-text-muted text-lg max-w-2xl mx-auto">
                        En Music Frito, tu privacidad es nuestra prioridad absoluta. Esta política describe cómo protegemos tu información.
                    </p>
                    <p className="text-mf-text-muted/60 text-sm mt-4">Última actualización: Abril 2026</p>
                </motion.div>

                {/* Sections */}
                <div className="bg-mf-surface/60 backdrop-blur-sm rounded-3xl border border-mf-surface-light p-6 md:p-10">

                    <Section icon={Eye} title="1. Información que Recolectamos" delay={0.1}>
                        <p><strong className="text-mf-text-main">Music Frito no recolecta información personal.</strong> La aplicación funciona de manera completamente offline y local en tu dispositivo.</p>
                        <p>No requerimos registro de cuentas, direcciones de correo electrónico, números de teléfono ni ningún dato de identificación personal para utilizar la aplicación.</p>
                        <p>La aplicación accede únicamente a los archivos de audio almacenados en tu dispositivo, y esta información nunca abandona tu teléfono.</p>
                    </Section>

                    <Section icon={Database} title="2. Almacenamiento de Datos" delay={0.15}>
                        <p>Todos los datos que genera Music Frito (playlists, favoritos, configuración del ecualizador, preferencias de tema) se almacenan <strong className="text-mf-text-main">exclusivamente en el almacenamiento local</strong> de tu dispositivo Android.</p>
                        <p>No utilizamos servidores en la nube, bases de datos remotas ni servicios de sincronización. Tu biblioteca musical y tus preferencias permanecen siempre bajo tu control total.</p>
                        <p>Si desinstalas la aplicación, todos los datos asociados se eliminan automáticamente de tu dispositivo.</p>
                    </Section>

                    <Section icon={Globe} title="3. Conexión a Internet" delay={0.2}>
                        <p>Music Frito <strong className="text-mf-text-main">no requiere conexión a internet</strong> para funcionar. La aplicación opera de manera completamente offline.</p>
                        <p>No realizamos conexiones a servidores externos, no descargamos contenido publicitario y no transmitimos telemetría ni analíticas de uso.</p>
                        <p>La única excepción es la descarga inicial del archivo APK desde nuestro sitio web, que sí requiere conexión.</p>
                    </Section>

                    <Section icon={Lock} title="4. Seguridad" delay={0.25}>
                        <p>Al no recolectar ni transmitir datos personales, el riesgo de brechas de seguridad o fugas de información es <strong className="text-mf-text-main">prácticamente inexistente</strong>.</p>
                        <p>Los archivos de audio se acceden mediante los permisos estándar de Android para almacenamiento, y la aplicación no solicita permisos innecesarios como acceso a cámara, micrófono, contactos o ubicación.</p>
                    </Section>

                    <Section icon={UserCheck} title="5. Permisos de la Aplicación" delay={0.3}>
                        <p>Music Frito solicita únicamente los siguientes permisos:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-mf-text-main">Almacenamiento:</strong> Para leer tus archivos de audio locales (MP3, FLAC, WAV, AAC, etc.).</li>
                            <li><strong className="text-mf-text-main">Servicio en primer plano:</strong> Para mantener la reproducción de música cuando la app está en segundo plano.</li>
                            <li><strong className="text-mf-text-main">Notificaciones:</strong> Para mostrar los controles del reproductor en la barra de notificaciones.</li>
                            <li><strong className="text-mf-text-main">Bluetooth:</strong> Para la función de compartir archivos de audio por Bluetooth.</li>
                        </ul>
                        <p>Ningún permiso adicional es solicitado ni requerido.</p>
                    </Section>

                    <Section icon={Bell} title="6. Publicidad y Rastreo" delay={0.35}>
                        <p>Music Frito <strong className="text-mf-text-main">no contiene publicidad</strong> de ningún tipo (banners, intersticiales, recompensados, etc.).</p>
                        <p>No utilizamos SDKs de publicidad como Google AdMob, Facebook Ads ni similares.</p>
                        <p>No implementamos herramientas de analítica como Google Analytics, Firebase Analytics, Mixpanel ni cualquier servicio de rastreo de comportamiento.</p>
                        <p>No vendemos, compartimos ni intercambiamos datos con terceros bajo ninguna circunstancia.</p>
                    </Section>

                    <Section icon={Trash2} title="7. Eliminación de Datos" delay={0.4}>
                        <p>Dado que todos los datos se almacenan localmente en tu dispositivo, tienes control total sobre ellos:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Puedes eliminar tus playlists y favoritos desde la propia aplicación.</li>
                            <li>Puedes borrar la caché y datos de la app desde la configuración de Android.</li>
                            <li>Al desinstalar Music Frito, todos los datos de la aplicación se eliminan permanentemente.</li>
                        </ul>
                        <p>Tus archivos de audio originales nunca son modificados ni eliminados por la aplicación.</p>
                    </Section>

                    <Section icon={Mail} title="8. Contacto" delay={0.45}>
                        <p>Si tienes preguntas sobre esta política de privacidad o cualquier inquietud relacionada con la protección de tus datos, puedes contactarnos a través de nuestra <Link to="/contacto" className="text-mf-primary hover:underline">página de contacto</Link>.</p>
                        <p>Nos comprometemos a responder todas las consultas en un plazo máximo de 48 horas hábiles.</p>
                    </Section>

                    <Section icon={Shield} title="9. Cambios en esta Política" delay={0.5}>
                        <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta misma página con la fecha de última actualización.</p>
                        <p>Si realizamos cambios significativos, informaremos a los usuarios a través de nuestra web oficial y en las notas de actualización de la aplicación.</p>
                    </Section>
                </div>

                {/* Back link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
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

export default PrivacyPolicy;
