import React from "react";
import styles from "./Hero.module.css"
import ButtonCTA from "../UI/ButtonCTA";
import illustration from "../../assets/illustration-working.svg"
function Hero() {
    return (
        <section className={styles.hero}>
            <article className={styles["hero__article"]}>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <ButtonCTA text="Get Started"/>
            </article>
            <img className={styles["hero__img"]} src={illustration} />
        </section>
    )
}

export default Hero;