import React from "react";
import styles from "./ShortenedLink.module.css";
import Button from "../UI/Button";
function ShortenedLink(props) {
  return (
    <li className={styles.link}>
      <a
        className={styles["link__input_link"]}
        href={props.inputLink}
        target="_blank"
      >
        {props.inputLink}
      </a>
      <hr />
      <a
        className={styles["link__short_link"]}
        href={props.shortLink}
        target="_blank"
      >
        {props.shortLink}
      </a>
      <Button text="Copy" />
    </li>
  );
}

export default ShortenedLink;
