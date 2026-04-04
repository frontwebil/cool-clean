import Image from "next/image";
import "./Stability.css";

const stabilityCards = [
  {
    img: "/StabilityCards/1.svg",
    title: "Професійна гіпоалергенна антибактеріальна хімія",
    text: "Використовуємо безпечні засоби, які знищують бактерії, грибок та неприємні запахи. Підходить для квартир з дітьми та алергіками.",
  },
  {
    img: "/StabilityCards/2.svg",
    title: "Оперативний виїзд по Києву та області",
    text: "Працюємо без затримок. У більшості випадків — виїзд у день звернення.",
  },
  {
    img: "/StabilityCards/3.svg",
    title: "Досвід та спеціалізація",
    text: "Маємо досвід обслуговування побутових та комерційних кондиціонерів різних типів і виробників. Працюємо з настінними, касетними та мульти-спліт системами.",
  },
  {
    img: "/StabilityCards/4.svg",
    title: "Чесна діагностика",
    text: "Перед початком робіт ми пояснюємо обсяг необхідного сервісу та погоджуємо вартість, без прихованих платежів і навʼязаних послуг.",
  },
  {
    img: "/StabilityCards/5.svg",
    title: "Програма лояльності для клієнтів",
    text: "Постійні клієнти отримують вигідні умови обслуговування та персональні знижки.",
  },
  {
    img: "/StabilityCards/6.svg",
    title: "Акуратність та чистота",
    text: "Працюємо обережно, без бруду у вашій квартирі чи офісі.",
  },
];

export function Stability() {
  return (
    <section className="stability" id="about">
      <div className="container">
        <h2 className="stability-title">
          Ми не лише усуваємо проблему, <br /> а й забезпечуємо стабільну роботу
          системи.
        </h2>
        <div className="stability-cards">
          {stabilityCards.map((el, i) => (
            <div className="stability-card" key={i}>
              <div className="stability-card-img">
                <Image
                  src={el.img}
                  width={36}
                  height={36}
                  alt="stability-card"
                />
              </div>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
