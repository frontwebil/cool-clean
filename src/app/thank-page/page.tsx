import Link from "next/link";
import "./style.css";

export default function Page() {
  return (
    <main className="thank-you">
      <div className="thank-you-modal">
        <h1 className="thank-you-title">Ми отримали вашу заявку</h1>
        <p className="thank-you-description">
          Зв`яжемося з вами протягом 15 хвилин
        </p>

        <Link href="/" className="thank-you-button">
          На головну
        </Link>
      </div>
    </main>
  );
}