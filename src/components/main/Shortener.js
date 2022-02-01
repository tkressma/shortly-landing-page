import React, { useState } from "react";
import styles from "./Shortener.module.css";
import Button from "../UI/Button";
function Shortener(props) {
  const [inputLink, setInputLink] = useState("");

  const shortenHandler = (event) => {
    event.preventDefault();
    console.log("Shorten link!");
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