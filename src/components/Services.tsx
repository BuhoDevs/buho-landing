import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Cloud, Shield, Zap } from "lucide-react";

const services = [
    {
        icon: <Globe size={32} />,
        title: "Desarrollo Web",
        description: "Sitios y aplicaciones web a medida construidos con tecnologías modernas para velocidad y escalabilidad.",
    },
    {
        icon: <Smartphone size={32} />,
        title: "Apps Móviles",
        description: "Aplicaciones móviles nativas y multiplataforma que brindan experiencias de usuario fluidas.",
    },
    {
        icon: <Brain size={32} />,
        title: "Soluciones de IA",
        description: "Automatización inteligente e integración de IA para optimizar tus procesos de negocio.",
    },
    {
        icon: <Cloud size={32} />,
        title: "Servicios en la Nube",
        description: "Configuración y gestión de infraestructura en la nube segura y escalable.",
    },
    {
        icon: <Shield size={32} />,
        title: "Ciberseguridad",
        description: "Protección de tus activos digitales con medidas de seguridad avanzadas y auditorías.",
    },
    {
        icon: <Zap size={32} />,
        title: "Estrategia Digital",
        description: "Consultoría estratégica para ayudarte a navegar el panorama digital y crecer.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Nuestros Servicios</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Soluciones digitales integrales adaptadas a las necesidades únicas de tu negocio.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
