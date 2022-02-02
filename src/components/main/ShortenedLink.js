import React from "react";
import styles from "./ShortenedLink.module.css";
import Button from "../UI/Button";
function ShortenedLink(props) {
  return (
    <li className={styles.link}>
      <p className={styles["link__input_link"]}>{props.inputLink}</p>
      <hr />
      <p className={styles["link__short_link"]}>{props.shortLink}</p>
      <Button text="Copy" />
    </li>
  );
}

export default ShortenedLink;
