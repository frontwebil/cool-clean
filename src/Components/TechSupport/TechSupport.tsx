import Image from "next/image";
import "./TechSupport.css";
import Link from "next/link";

const techSupportCards = [
  {
    img: "/TechSupport/1.svg",
    title: "Чистка кондиціонерів",
    text: "Проводимо глибоку чистку внутрішнього та зовнішнього блоку з частковим розбором, промивкою теплообмінника, вентилятора та дренажної системи. Використовуємо професійну гіпоалергенну антибактеріальну хімію, що знищує грибок, бактерії та неприємні запахи.",
  },
  {
    img: "/TechSupport/2.svg",
    title: "Сервісне обслуговування",
    text: "Виконуємо комплексну перевірку системи: контроль тиску фреону, діагностику електроніки та огляд основних вузлів. Профілактичне обслуговування допомагає уникнути серйозних поломок і продовжує термін служби обладнання.",
  },
  {
    img: "/TechSupport/3.png",
    title: "Заправка фреоном",
    text: "Проводимо діагностику, перевіряємо систему на витоки та виконуємо дозаправку або повну заправку відповідним типом фреону. Гарантуємо правильний рівень та стабільну роботу кондиціонера після обслуговування.",
  },
  {
    img: "/TechSupport/4.svg",
    title: "Ремонт будь-якої складності",
    text: "Визначаємо точну причину несправності та погоджуємо вартість до початку робіт. Ремонтуємо електроніку, усуваємо витоки, замінюємо несправні елементи. Відновлюємо стабільну та безпечну роботу кондиціонера.",
  },
];

export function TechSupport({ setIsOpenForm }: { setIsOpenForm: () => void }) {
  return (
    <section className="tech-support" id="services">
      <div className="container">
        <h2 className="tech-support-title">
          Забезпечуємо повний технічний супровід кондиціонера
        </h2>
        <p className="tech-support-description">
          Від первинної діагностики до відновлення стабільної роботи з
          дотриманням професійних стандартів і гарантією якості.
        </p>
        <div className="tech-support-flex">
          <div className="tech-support-img">
            <Image
              src={"/TechSupport/main.jpg"}
              width={1000}
              height={1000}
              alt="Забезпечуємо повний технічний супровід кондиціонера"
            />
          </div>
          <div className="tech-support-cards">
            {techSupportCards.map((card, i) => (
              <div className="tech-support-card" key={i}>
                <div className="tech-support-icon">
                  <Image
                    src={card.img}
                    width={60}
                    height={60}
                    alt="tech icon"
                  />
                </div>
                <div className="tech-support-text">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tech-support-button">
        <Link href={"#contacts"} className="button-order">
          Замовити послугу
        </Link>
      </div>
    </section>
  );
}
