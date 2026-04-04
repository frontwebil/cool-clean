import axios from "axios";
import "./Form.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormProps = {
  isOpenForm: boolean;
  setIsOpen: () => void;
};

export function Form({ isOpenForm, setIsOpen }: FormProps) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmitLeed = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/sendMessageToTelegram", {
      name,
      phone,
    });

    if (response.data.data.ok && response.data.success) {
      setName("");
      setPhone("");
      router.replace("/thank-page");
    }
  };
  return (
    <section
      className={`form ${isOpenForm ? "open" : ""}`}
      onClick={() => setIsOpen()}
    >
      <div
        className="form-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="form-title">Отримати консультацію</h2>
        <p className="form-description">
          Заповніть форму і ми зателефонуємо вам протягом 10 хвилин
        </p>

        <form className="form-contact" onSubmit={handleSubmitLeed}>
          <div className="form-contact-group">
            <h3>Ім’я*</h3>
            <input
              type="text"
              placeholder="Ваше ім’я"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-contact-group">
            <h3>Телефон*</h3>
            <input
              type="tel"
              placeholder="+38 (0XX) XXX-XX-XX"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="form-contact-button">Надіслати заявку</button>
        </form>
      </div>
    </section>
  );
}
