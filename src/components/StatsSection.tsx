import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertCircle, 
  UserCheck, 
  TrendingUp
} from "lucide-react";

const stats = [
  {
    title: "Выявленные случаи",
    value: "Более 500+",
    description: "случаев экстремизма выявлено в 2023 году",
    icon: AlertCircle,
  },
  {
    title: "Предотвращено",
    value: "Более 80%",
    description: "потенциальных инцидентов благодаря образовательным программам",
    icon: UserCheck,
  },
  {
    title: "Общественное участие",
    value: "На 65%",
    description: "выросла осведомленность молодежи о проблеме за последние 5 лет",
    icon: TrendingUp,
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Масштаб проблемы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="font-medium mb-1">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;