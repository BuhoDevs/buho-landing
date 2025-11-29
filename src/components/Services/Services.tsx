import MotionWrapper from "../MotionWrapper";
import RevealOnScroll from "../RevealOnScroll";
import ServiceCard from "./ServiceCard";
import { services } from "./utils";

const Services = () => {
  return (
    <MotionWrapper
      id="services-section"
      animation="flipY"
      className="relative  lg:h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold py-6 sm:py-10 mb-4 text-accent-foreground uppercase">
        Servicios
      </h2>
      <div
        className="
      max-w-[1280px] mx-auto
      px-[1rem] sm:px-[2rem]
      grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <RevealOnScroll key={service} delay={index * 0.2}>
            <ServiceCard title={service} />
          </RevealOnScroll>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default Services;
