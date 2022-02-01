import React from "react";
import styles from "./ShortenedLink.module.css";
import Button from "../UI/Button";
function ShortenedLink(props) {
  return (
    <li className={styles.link}>
      <p className={styles["link__input_link"]}>http://www.cool.com</p>
      <hr />
      <p className={styles["link__shortened_link"]}>http://rel.ink/gx09fb</p>
      <Button text="Copy" />
    </li>
  );
}

export default ShortenedLink;
