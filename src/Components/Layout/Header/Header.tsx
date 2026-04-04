"use client";

import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";

type HeaderProps = {
  setIsOpenForm: () => void;
};

const navLinks = [
  { href: "#about", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#resaults", label: "Результати" },
  { href: "#contacts", label: "Контакти" },
];

export function Header({ setIsOpenForm }: HeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const width = useWindowWidth();

  const [height, setHeight] = useState(100);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [width]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (width && width > 1100) {
      setIsOpen(false);
    }
  }, [width]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`header ${isScrolled ? "header-scrolled" : ""}`}
        ref={ref}
      >
        <div className="header-wrapper">
          <Link href="/" className="header-logo" onClick={closeMenu}>
            <Image
              src="/Header/logo-icon.svg"
              width={48}
              height={48}
              alt="CoolClean icon logo"
            />
            <h2>CoolClean</h2>
          </Link>

          {width && width > 1100 && (
            <nav className="header-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header-nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="header-right">
            {width && width > 1100 && (
              <>
                <div className="header-right-column-phones">
                  <Link
                    href="tel:380663633628"
                    className="header-right-phone-link"
                  >
                    +38 (066) 363 36 28
                  </Link>
                  <Link
                    href="tel:380733733728"
                    className="header-right-phone-link"
                  >
                    +38 (073) 373 37 28
                  </Link>
                </div>

                <button
                  className="header-button"
                  onClick={() => setIsOpenForm()}
                  type="button"
                >
                  Передзвоніть мені
                </button>
              </>
            )}

            {width && width <= 1100 && (
              <button
                className="header-burger-button"
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={isOpen}
              >
                <div id="nav-icon3" className={isOpen ? "open" : ""}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            )}
          </div>
        </div>


        {width && width <= 1100 && (
          <>
            <div
              className={`header-mobile-overlay ${isOpen ? "active" : ""}`}
              onClick={closeMenu}
            />

            <div className={`header-mobile-menu ${isOpen ? "active" : ""}`}>
              <nav className="header-mobile-nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="header-mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="header-mobile-bottom">
                <button
                  className="header-button header-mobile-button"
                  onClick={() => {
                    closeMenu();
                    setIsOpenForm();
                  }}
                  type="button"
                >
                  Передзвоніть мені
                </button>
              </div>
            </div>
          </>
        )}
      </header>

      <div style={{ paddingBottom: height }} />
    </>
  );
}
