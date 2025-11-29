import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface IServiceCard {
  title: string;
}
const ServiceCard = (params: IServiceCard) => {
  const { title } = params;
  return (
    <Card
      className={cn(
        "bg-gray-100/20",
        "dark:bg-transparent",
        "p-4 hover:shadow-lg transition-shadow",
        "shadow-md hover:shadow-lg transition-shadow dark:shadow-gray-800/50"
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Descripción breve del servicio.</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
