import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ExternalLink, Info } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-6">О проблеме экстремизма среди молодежи</h1>
          <Separator className="my-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Глобальная проблема XXI века</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Экстремизм среди молодежи представляет собой одну из наиболее серьезных угроз современному обществу. 
                  Молодые люди в возрасте от 14 до 30 лет становятся основной целевой аудиторией радикальных группировок из-за 
                  их восприимчивости к новым идеям, эмоциональной нестабильности и стремления к самоутверждению.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  В условиях глобализации и цифровизации происходит трансформация методов вербовки и распространения 
                  экстремистских идей. Социальные сети и мессенджеры активно используются для пропаганды радикальных взглядов 
                  и привлечения новых сторонников.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Причины и факторы риска</h2>
                <ul className="space-y-4 list-disc pl-6">
                  <li className="text-lg">
                    <span className="font-medium">Социально-экономические факторы:</span> неравенство, безработица, отсутствие 
                    перспектив социальной мобильности
                  </li>
                  <li className="text-lg">
                    <span className="font-medium">Психологические факторы:</span> кризис идентичности, поиск смысла жизни, 
                    желание принадлежать к группе
                  </li>
                  <li className="text-lg">
                    <span className="font-medium">Информационные факторы:</span> доступность радикального контента в интернете, 
                    манипулятивные технологии в социальных сетях
                  </li>
                  <li className="text-lg">
                    <span className="font-medium">Идеологические факторы:</span> искаженное восприятие религиозных и политических 
                    учений, исторических событий
                  </li>
                </ul>
              </section>
            </div>
            
            <div>
              <Card className="bg-primary/5 border-none mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <h3 className="font-bold text-lg">Тревожная статистика</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-medium">70%</span> вовлеченных в экстремистскую деятельность — молодежь до 30 лет
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">На 40%</span> увеличилось количество экстремистских материалов в интернете за последние 5 лет
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Более 60%</span> молодых людей признаются, что сталкивались с экстремистским контентом в сети
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-lg">Полезные ресурсы</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://мвд.рф/reports" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                        Материалы МВД России <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a href="https://ncpti.su/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                        Национальный центр противодействия терроризму <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youth.gov.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                        Федеральное агентство по делам молодежи <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;