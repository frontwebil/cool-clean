import Image from "next/image";
import Link from "next/link";
import "./Form.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function MainForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmitLeed = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/sendMessageToTelegram", {
      name,
      phone,
      comment,
    });

    if (response.data.data.ok && response.data.success) {
      setName("");
      setComment("");
      setPhone("");
      router.replace("/thank-page");
    }
  };

  return (
    <section className="main-form" id="contacts">
      <div className="container">
        <div className="main-form-left-text">
          <h2 className="main-form-left-text-title">
            Потрібен сервіс кондиціонера?
          </h2>
          <p className="main-form-left-text-descriprion">
            Залиште заявку або зв’яжіться з нами зручним способом — ми швидко
            проконсультуємо та узгодимо виїзд майстра.
          </p>
          <div className="main-form-left-text-numbers">
            <Link
              href={"tel:380733733728"}
              className="main-form-left-text-number"
            >
              <p className="main-form-left-text-number-title">Lifecell:</p>
              <p className="main-form-left-text-number-phone">
                +38 (073) 373 37 28;
              </p>
            </Link>
            <Link
              href={"tel:380663633628"}
              className="main-form-left-text-number"
            >
              <p className="main-form-left-text-number-title">Vodafone:</p>
              <p className="main-form-left-text-number-phone">
                +38 (066) 363 36 28.
              </p>
            </Link>
          </div>

          <h4 className="main-form-left-text-social-title">
            Або напишіть нам у месенджер:
          </h4>
          <div className="main-form-left-text-social-cards">
            <Link
              href={"https://t.me/vlad_3113"}
              className="main-form-left-text-social-card"
            >
              <Image
                src={"/Form/telegram.svg"}
                width={25}
                height={25}
                alt="Telegram Icon"
              />
              <p>Telegram</p>
            </Link>
            <Link
              href={"https://msng.link/o?0663633628=vi"}
              className="main-form-left-text-social-card"
            >
              <Image
                src={"/Form/viber.svg"}
                width={25}
                height={25}
                alt="Viber Icon"
              />
              <p>Viber</p>
            </Link>
          </div>
        </div>
        <div className="main-form-right">
          <h2 className="main-form-right-title">Залишити заявку</h2>
          <p className="main-form-right-description">
            Заповніть форму і ми зателефонуємо вам протягом 10 хвилин
          </p>
          <form className="main-form-right-wrapper" onSubmit={handleSubmitLeed}>
            <div className="main-form-right-wrapper-group">
              <p>Ім’я*</p>
              <input
                type="text"
                placeholder="Ваше ім’я"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="main-form-right-wrapper-group">
              <p>Телефон*</p>
              <input
                type="tel"
                placeholder="+38 (0XX) XXX-XX-XX"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="main-form-right-wrapper-group">
              <p>Коментар</p>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button className="main-form-right-button">Надіслати заявку</button>
          </form>
        </div>
      </div>
    </section>
  );
}
