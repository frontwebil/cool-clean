import { useWindowWidth } from "@/Hooks/useWindowWidth";
import "./Hero.css";
import Link from "next/link";

export function Hero({ setIsOpenForm }: { setIsOpenForm: () => void }) {
  const width = useWindowWidth();
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-expirienct">
          {width && width >= 500
            ? "Більше 7 років досвіду в обслуговуванні кондиціонерів"
            : "7+  років досвіду обслуговування кондиціонерів "}
        </div>
        <h1 className="hero-title">
          Обслуговуємо кондиціонери у Києві та київській області
        </h1>
        <p className="hero-undertitle-text">
          Забезпечуємо повний комплекс робіт: від профілактичної чистки до
          складного технічного ремонту.
        </p>
        <div className="hero-buttons">
          <Link href={'#contacts'} className="button-order">
            Замовити послугу
          </Link>
          <button className="button-cons" onClick={() => setIsOpenForm()}>
            Отримати консультацію
          </button>
        </div>
      </div>
    </section>
  );
}
