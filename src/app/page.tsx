"use client";

import { Condicioner } from "@/Components/Condicioner/Condicioner";
import { MainForm } from "@/Components/Form/Form";
import { Hero } from "@/Components/Hero/Hero";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Form } from "@/Components/Layout/Form/Form";
import { Header } from "@/Components/Layout/Header/Header";
import { Resaults } from "@/Components/Resaults/Resaults";
import { Stability } from "@/Components/Stability/Stability";
import { TechSupport } from "@/Components/TechSupport/TechSupport";
import { UnderHeroImgs } from "@/Components/UnderHeroImgs/UnderHeroImgs";
import { useState } from "react";

export default function Home() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const setIsOpenFormFunction = () => {
    setIsOpenForm(!isOpenForm);
  };
  const isDisabled = process.env.NEXT_PUBLIC_SITE_DISABLED !== "false";

  if (isDisabled) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Сайт тимчасово недоступний</h1>
          <p>Для відновлення доступу зверніться до адміністратора.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Form isOpenForm={isOpenForm} setIsOpen={setIsOpenFormFunction} />
      <div className="page-top-bg">
        <Header setIsOpenForm={setIsOpenFormFunction} />
        <Hero setIsOpenForm={setIsOpenFormFunction} />
        <UnderHeroImgs />
        <Stability />
        <Condicioner setIsOpenForm={setIsOpenFormFunction} />
      </div>
      <div className="page-bottom-bg">
        <TechSupport setIsOpenForm={setIsOpenFormFunction} />
        <Resaults />
        <MainForm />
        <Footer />
      </div>
    </>
  );
}
