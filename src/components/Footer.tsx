import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">БезопасноеБудущее</h3>
            <p className="text-muted-foreground">
              Образовательный проект по противодействию экстремизму среди молодежи
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Образовательные материалы
                </Link>
              </li>
              <li>
                <Link to="/hotlines" className="text-muted-foreground hover:text-primary transition-colors">
                  Телефоны доверия
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Часто задаваемые вопросы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Контакты</h3>
            <p className="text-muted-foreground">
              По вопросам сотрудничества и для получения дополнительной информации.
            </p>
            <p className="text-muted-foreground mt-2">
              Email: info@безопасноебудущее.рф
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} БезопасноеБудущее. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;