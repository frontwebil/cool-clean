import "./Hero.css";

export function Hero({ setIsOpenForm }: { setIsOpenForm: () => void }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-expirienct">
          Більше 7 років досвіду в обслуговуванні кондиціонерів
        </div>
        <h1 className="hero-title">
          Обслуговуємо кондиціонери у Києві та київській області
        </h1>
        <p className="hero-undertitle-text">
          Забезпечуємо повний комплекс робіт: від профілактичної чистки до
          складного технічного ремонту.
        </p>
        <div className="hero-buttons">
          <button className="button-order" onClick={() => setIsOpenForm()}>
            Замовити послугу
          </button>
          <button className="button-cons" onClick={() => setIsOpenForm()}>
            Отримати консультацію
          </button>
        </div>
      </div>
    </section>
  );
}
