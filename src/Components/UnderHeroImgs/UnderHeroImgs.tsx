import Image from "next/image";
import "./UnderHeroImgs.css";

const imgs = [
  "/UnderHero/1.webp",
  "/UnderHero/2.webp",
  "/UnderHero/3.webp",
  "/UnderHero/4.webp",
];

export function UnderHeroImgs() {
  return (
    <section className="UnderHeroImgs">
      <div className="container">
        <div className="UnderHeroImgs-flex">
          {imgs.map((img, i) => (
            <div className="UnderHeroImgs-item" key={i}>
              <Image
                src={img}
                alt={`CoolClean ${i + 1}`}
                width={600}
                height={1000}
                className="UnderHeroImgs-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
