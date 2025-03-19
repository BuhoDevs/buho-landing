import MotionWrapper from "./MotionWrapper";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <MotionWrapper animation="rotateIn" className="text-center max-w-2xl">
      <h1 className="text-4xl font-bold">Buho Soft</h1>
      <p className="text-lg text-gray-600 mt-4">
        Software a medida para potenciar tu negocio.
      </p>
      <div className="mt-6 space-x-4">
        <Button className="px-6 py-3 hover:scale-105 transition-transform">
          Solicita una consulta
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 hover:scale-105 transition-transform"
        >
          Ver proyectos
        </Button>
      </div>
    </MotionWrapper>
  );
};

export default Hero;
