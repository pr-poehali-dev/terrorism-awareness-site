import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

// Компонент для отображения QR-кода
// В реальном проекте здесь следует использовать библиотеку для генерации QR-кодов
// Например, react-qr-code или qrcode.react
const QRCodeGenerator = () => {
  const [qrUrl, setQrUrl] = useState("");
  
  useEffect(() => {
    // Для демо используем заглушку - в реальном проекте тут будет генерация QR-кода
    // на основе текущего URL или специального идентификатора
    setQrUrl("/placeholder.svg");
    
    // В реальной реализации:
    // 1. Генерируем URL, который будет кодироваться в QR
    // 2. Используем библиотеку для генерации QR-кода
    // 3. Сохраняем результат в состоянии
  }, []);

  // Имитация загрузки QR-кода
  const handleDownload = () => {
    // В реальном приложении здесь будет функция для скачивания QR-кода
    alert("Скачивание QR-кода");
  };

  // Имитация функции поделиться
  const handleShare = () => {
    // В реальном приложении здесь будет использоваться Web Share API
    if (navigator.share) {
      navigator.share({
        title: "БезопасноеБудущее",
        text: "Образовательный проект по противодействию экстремизму среди молодежи",
        url: window.location.href,
      });
    } else {
      alert("Ссылка скопирована в буфер обмена");
    }
  };

  return (
    <Card className="p-6 flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">Поделиться проектом</h3>
      <div className="border border-border p-2 rounded-md mb-4">
        <img 
          src={qrUrl} 
          alt="QR-код для перехода на сайт" 
          className="w-48 h-48"
        />
      </div>
      <p className="text-sm text-muted-foreground mb-4 text-center">
        Отсканируйте QR-код для доступа к материалам проекта по противодействию экстремизму среди молодежи
      </p>
      <div className="flex gap-2 w-full">
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Скачать
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          Поделиться
        </Button>
      </div>
    </Card>
  );
};

export default QRCodeGenerator;