
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

const About = () => {
    const features = [
        "Equipo de Desarrolladores Expertos",
        "Stack Tecnológico de Vanguardia",
        "Proceso de Desarrollo Ágil",
        "Soporte y Mantenimiento 24/7",
    ];

    return (
        <section id="about" className="py-24 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12">
                                <Logo className="w-full h-full drop-shadow-[0_0_50px_rgba(124,58,237,0.5)]" />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Quiénes Somos
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            BuhoSoft es una empresa de desarrollo de software con visión de futuro dedicada a transformar desafíos complejos en soluciones digitales elegantes. Combinamos experiencia técnica con innovación creativa para entregar productos que destacan.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-accent" size={24} />
                                    <span className="text-lg font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-primary">50+</h4>
                                <p className="text-muted-foreground">Proyectos Completados</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary">100%</h4>
                                <p className="text-muted-foreground">Satisfacción del Cliente</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
