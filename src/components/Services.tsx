import MotionWrapper from "./MotionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Desarrollo a Medida",
        "Aplicaciones Web",
        "Consultoría",
        "Integraciones",
        "UI/UX",
        "Soporte Técnico",
      ].map((service, index) => (
        <MotionWrapper key={service} animation="staggered" delay={index * 0.2}>
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{service}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Descripción breve del servicio.</p>
            </CardContent>
          </Card>
        </MotionWrapper>
      ))}
    </section>
  );
};

export default Services;
