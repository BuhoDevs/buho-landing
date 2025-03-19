import MotionWrapper from "./MotionWrapper";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <MotionWrapper animation="scaleIn" className="max-w-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
      <div className="space-y-4">
        <Input placeholder="Nombre" />
        <Input type="email" placeholder="Correo" />
        <Textarea placeholder="Mensaje" />
        <Button className="w-full hover:scale-105 transition-transform">
          Enviar Mensaje
        </Button>
      </div>
      <div className="mt-6 flex items-center space-x-4 text-gray-600">
        <MotionWrapper animation="flipX">
          <Mail /> <span>contacto@buhosoft.com</span>
        </MotionWrapper>
        <MotionWrapper animation="flipY">
          <Phone /> <span>+591 64-104476</span>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
};

export default Contact;
