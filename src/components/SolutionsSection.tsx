import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LightbulbIcon, School, Users } from "lucide-react";

const solutions = [
  {
    title: "Образовательные программы",
    description: "Специальные курсы и семинары в школах и вузах, направленные на понимание проблемы экстремизма и его последствий",
    icon: School,
  },
  {
    title: "Поддержка молодежных инициатив",
    description: "Создание и поддержка молодежных организаций, направленных на укрепление межнациональной и межрелигиозной дружбы",
    icon: Users,
  },
  {
    title: "Психологическая помощь",
    description: "Программы психологической поддержки для молодежи, находящейся в группе риска, и их родителей",
    icon: LightbulbIcon,
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Решения проблемы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к предотвращению экстремизма и диверсий через образование, поддержку и сотрудничество
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;