import React from "react";
import styles from "./Hero.module.css";
import ButtonCTA from "../UI/ButtonCTA";
import illustration from "../../assets/illustration-working.svg";
function Hero() {
  return (
    <section className={styles.hero}>
      <article className={styles["hero__article"]}>
        <h1 className={styles["hero__h1"]}>More than just shorter links</h1>
        <p className={styles["hero__p"]}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <ButtonCTA text="Get Started" />
      </article>
      <div className={styles["hero__img_container"]}>
        <img
          className={styles["hero__img"]}
          src={illustration}
          alt="Cartoon figure of someone at their computer desk"
        />
      </div>
    </section>
  );
}

export default Hero;
