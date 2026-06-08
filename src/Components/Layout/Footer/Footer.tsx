import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Image
            src={"/Header/logo-icon.svg"}
            width={48}
            height={48}
            alt="CoolClean icon logo"
          />
          <h2>CoolClean</h2>
        </div>
        <div className="footer-bottom">
          <Link href={"https://maps.app.goo.gl/cSC6g3t5eqG66rwAA"}>
            м. Київ, вул. Героїв полку «Азов», 32.
          </Link>
          <nav className="footer-bottom-nav">
            <Link href="#about">Про нас</Link>
            <Link href="#services">Послуги</Link>
            <Link href="#resaults">Результати</Link>
            <Link href="#contacts">Контакти</Link>
            <Link href="/privacy-policy">Політика конфіденційності</Link>
          </nav>
          <p>© 2026 CoolClean</p>
        </div>
      </div>
    </footer>
  );
}
