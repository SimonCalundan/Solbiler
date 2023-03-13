import React from "react";
import styles from "../styles/Hero.module.css";
import Form from "./ui/Form";

export default function Hero() {
  return (
    <section className={styles.background}>
      <div className=" w-full h-full backdrop-brightness-[.3] flex  items-center text-center flex-col justify-center space-y-8">
        <h2 className=" text-5xl text-white font-bold mx-auto backdrop-blur hidden md:block">
          Velkommen til Solbiler ApS
        </h2>
        <p className=" w-full max-w-lg md:max-w-2xl text-white text-xl font-light hidden md:block ">
          Udforsk verden med vores biler! Lej den perfekte bil til din næste
          rejse i dag og oplev friheden ved at køre på dine egne vilkår.
        </p>
        <Form />
      </div>
    </section>
  );
}
