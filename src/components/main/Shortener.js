import React, { useState } from "react";
import styles from "./Shortener.module.css";
import Button from "../UI/Button";
import validator from "validator";

function Shortener(props) {
  const [inputLink, setInputLink] = useState("");

  const shortenHandler = (event) => {
    event.preventDefault();
    if (validator.isURL(inputLink)) {
      const linkData = {
        inputLink: inputLink,
        shortLink: inputLink,
      };
      props.storeLinkData(linkData);
      setInputLink("");
    }
  };

  const linkChangeHandler = (event) => {
    setInputLink(event.target.value);
  };

  return (
    <section className={styles.shortener}>
      <form onSubmit={shortenHandler}>
        <input
          className={styles["shortener__input"]}
          id="input_link"
          type="text"
          placeholder="Shorten a link here..."
          value={inputLink}
          onChange={linkChangeHandler}
        />
        <Button type="submit" text="Shorten it!" />
      </form>
    </section>
  );
}
export default Shortener;
