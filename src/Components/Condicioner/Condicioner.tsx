import Image from "next/image";
import "./Condicioner.css";

export function Condicioner({ setIsOpenForm }: { setIsOpenForm: () => void }) {
  return (
    <section className="condicioner">
      <div className="container">
        <div className="condicioner-text">
          <h3 className="condicioner-text-title">
            Брудний кондиціонер — це не лише про пил, а й про бактерії у
            повітрі.
          </h3>
          <p className="condicioner-text-description">
            Грибок і бактерії потрапляють у повітря вже під час роботи системи.
            Не чекайте, поки це вплине на ваше здоров’я та ефективність
            кондиціонера.
          </p>
          <button className="button-order" onClick={() => setIsOpenForm()}>
            Замовити послугу
          </button>
        </div>
        <div className="condicioner-img">
          <Image
            src={"/Condicioner/Main.png"}
            width={1000}
            height={1000}
            alt="Брудний кондиціонер — це не лише про пил, а й про бактерії у повітрі."
          />
        </div>
      </div>
    </section>
  );
}
