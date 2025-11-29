import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Dashboard Analítico",
        description: "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas y reportes automatizados.",
        tags: ["React", "D3.js", "Node.js"],
        image: "/img/projects/project_dashboard_mockup.png",
        link: "#",
        github: "#"
    },
    {
        title: "App Fintech",
        description: "Aplicación móvil segura para gestión financiera personal con integración bancaria y pagos QR.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "/img/projects/project_dashboard_mockup.png",
        link: "#",
        github: "#"
    },
    {
        title: "E-commerce Corporativo",
        description: "Sitio web corporativo de alto rendimiento con catálogo de productos y pasarela de pagos integrada.",
        tags: ["Next.js", "Stripe", "Tailwind"],
        image: "/img/projects/project_dashboard_mockup.png",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Proyectos Destacados</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Una selección de nuestros trabajos más recientes, demostrando nuestra pasión por la calidad y la innovación.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative z-20">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                                        Ver Proyecto <ArrowRight size={16} />
                                    </a>
                                    <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
