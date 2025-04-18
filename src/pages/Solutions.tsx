import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, School, UsersRound, Building, Lightbulb } from "lucide-react";
import QRCodeSection from "@/components/QRCodeSection";

const Solutions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-6">Пути решения проблемы</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Комплексный подход к противодействию экстремизму среди молодежи включает образовательные, 
            социальные и психологические меры.
          </p>
          <Separator className="my-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <School className="h-5 w-5 text-primary" />
                  <CardTitle>Образовательные меры</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Информационная грамотность</p>
                      <p className="text-muted-foreground">Обучение критическому мышлению и навыкам проверки информации для противодействия фейкам и манипуляциям</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <UsersRound className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Межкультурный диалог</p>
                      <p className="text-muted-foreground">Программы по изучению различных культур, религий и традиций для формирования толерантности и уважения к различиям</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Правовое просвещение</p>
                      <p className="text-muted-foreground">Информирование молодежи об ответственности за экстремистскую деятельность и последствиях радикализации</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-5 w-5 text-primary" />
                  <CardTitle>Институциональные меры</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <UsersRound className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Молодежные организации</p>
                      <p className="text-muted-foreground">Создание и поддержка молодежных объединений, способствующих социальной интеграции и гражданской активности</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <School className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Социальная адаптация</p>
                      <p className="text-muted-foreground">Программы профессиональной ориентации и трудоустройства для молодежи из групп риска</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Психологическая поддержка</p>
                      <p className="text-muted-foreground">Доступность психологических консультаций и помощи для молодых людей, подверженных радикальным влияниям</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Роль родителей и наставников</h2>
            <p className="mb-4">
              Близкие взрослые играют ключевую роль в профилактике экстремизма среди молодежи. Их внимание, 
              поддержка и готовность к открытому диалогу помогают молодым людям сформировать здоровые ценности 
              и противостоять негативным влияниям.
            </p>
            <Button variant="default" className="flex items-center gap-2">
              Материалы для родителей <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <QRCodeSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;