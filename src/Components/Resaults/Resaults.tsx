import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./Resaults.css";
import Image from "next/image";
import { useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";

const imgCards = ["/Resault/1.png", "/Resault/2.png", "/Resault/3.png"];

export function Resaults() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const width = useWindowWidth();

  const itemsPerSlide = width && width <= 880 ? 1 : 2;

  const slides = [];
  for (let i = 0; i < imgCards.length; i += itemsPerSlide) {
    slides.push(imgCards.slice(i, i + itemsPerSlide));
  }

  if (currentSlide > slides.length - 1) {
    setCurrentSlide(slides.length - 1);
  }

  return (
    <section className="resaults" id="resaults">
      <div className="container">
        <div className="resaults-top">
          <h3 className="resaults-top-title">Результат, який видно</h3>

          {width && width > 500 && (
            <div className="resaults-top-nav">
              <div
                className={`resaults-top-nav-circle ${
                  currentSlide === 0 ? "disabled" : ""
                }`}
                onClick={() =>
                  currentSlide > 0 && setCurrentSlide(currentSlide - 1)
                }
              >
                <GoArrowLeft className="resault-top-arrow" />
              </div>

              <div
                className={`resaults-top-nav-circle ${
                  currentSlide === slides.length - 1 ? "disabled" : ""
                }`}
                onClick={() =>
                  currentSlide < slides.length - 1 &&
                  setCurrentSlide(currentSlide + 1)
                }
              >
                <GoArrowRight className="resault-top-arrow" />
              </div>
            </div>
          )}
        </div>

        <div className="resaults-cards">
          {slides[currentSlide]?.map((img, i) => (
            <div className="resaults-card" key={img}>
              <Image
                src={img}
                width={650}
                height={400}
                alt={`Результат ${currentSlide * itemsPerSlide + i + 1}`}
              />
            </div>
          ))}
        </div>
        {width && width <= 500 && (
          <div className="resaults-top-nav">
            <div
              className={`resaults-top-nav-circle ${
                currentSlide === 0 ? "disabled" : ""
              }`}
              onClick={() =>
                currentSlide > 0 && setCurrentSlide(currentSlide - 1)
              }
            >
              <GoArrowLeft className="resault-top-arrow" />
            </div>
            <p className="resaults-top-nav-current-slide">
              {currentSlide + 1} / 3
            </p>
            <div
              className={`resaults-top-nav-circle ${
                currentSlide === slides.length - 1 ? "disabled" : ""
              }`}
              onClick={() =>
                currentSlide < slides.length - 1 &&
                setCurrentSlide(currentSlide + 1)
              }
            >
              <GoArrowRight className="resault-top-arrow" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
