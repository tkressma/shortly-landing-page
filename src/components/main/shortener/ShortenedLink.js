import React, { useState, useEffect } from "react";
import styles from "./ShortenedLink.module.css";
import Button from "../../UI/Button";
function ShortenedLink(props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortLink);
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
        href={props.inputLink}
        target="_blank"
        rel="noreferrer"
      >
        {props.inputLink}
      </a>
      <hr />
      <a
        className={styles["link__short_link"]}
        href={props.shortLink}
        target="_blank"
        rel="noreferrer"
      >
        {props.shortLink}
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
