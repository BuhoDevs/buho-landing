import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-medium text-muted-foreground">Innovando el Futuro</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-6 leading-tight"
        >
          Transformamos Ideas en <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Realidad Digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Creamos experiencias digitales premium que elevan tu marca. Desde sitios web impresionantes hasta aplicaciones web complejas, damos vida a tu visión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] flex items-center gap-2 group"
          >
            Iniciar Proyecto
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-white/5 text-foreground font-semibold hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2"
          >
            <Code size={20} />
            Ver Servicios
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 md:left-20 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center hidden lg:flex"
      >
        <div className="w-8 h-8 rounded-full bg-primary/50" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 w-20 h-20 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center hidden lg:flex"
      >
        <div className="w-10 h-10 rounded-full bg-accent/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
