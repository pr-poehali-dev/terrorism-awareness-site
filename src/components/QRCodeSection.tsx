import QRCodeGenerator from "./QRCodeGenerator";

const QRCodeSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Информационные материалы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Сканируйте QR-код для доступа к образовательным материалам и ресурсам по противодействию экстремизму
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <QRCodeGenerator />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Распространите информацию в вашем учебном заведении, организации или сообществе.
            <br />Вместе мы создаем безопасное будущее для молодежи России.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;