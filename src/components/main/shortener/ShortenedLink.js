import React, { useState, useEffect } from "react";
import styles from "./ShortenedLink.module.css";
import Button from "../../UI/Button";
function ShortenedLink(props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortURL);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 4000);
    }
  }, [copied]);

  return (
    <li className={styles.link}>
      <a
        className={styles["link__input_link"]}
        href={props.longURL}
        target="_blank"
        rel="noreferrer"
      >
        {props.longURL}
      </a>
      <hr />

      <a
        className={styles["link__short_link"]}
        href={props.shortURL}
        target="_blank"
        rel="noreferrer"
      >
        {props.shortURL}
      </a>
      <Button
        text={`${!copied ? "Copy" : "Copied!"}`}
        onClick={handleCopy}
        copied={copied}
      />
    </li>
  );
}

export default ShortenedLink;
