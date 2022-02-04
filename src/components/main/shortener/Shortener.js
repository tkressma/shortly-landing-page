import React, { useState } from "react";
import styles from "./Shortener.module.css";
import classNames from "classnames";
import Button from "../../UI/Button";
import validator from "validator";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

function Shortener(props) {
  const [inputLink, setInputLink] = useState("");
  const [isValid, setIsValid] = useState(true);

  const shortenHandler = (event) => {
    event.preventDefault();

    if (validator.isURL(inputLink)) {
      setIsValid(true);
      const linkData = {
        inputLink: inputLink,
        shortLink: inputLink,
      };
      props.storeLinkData(linkData);
      setInputLink("");
    } else {
      setIsValid(false);
    }
  };

  const linkChangeHandler = (event) => {
    setInputLink(event.target.value);
  };

  return (
    <section className={styles.shortener}>
      <form onSubmit={shortenHandler}>
        <input
          className={classNames(
            styles["shortener__input"],
            !isValid && styles.error
          )}
          id="input_link"
          type="text"
          placeholder="Shorten a link here..."
          value={inputLink}
          onChange={linkChangeHandler}
        />
        <Button type="submit" text="Shorten it!" />
      </form>
      {!isValid && (
        <label className={styles["shortener__error"]}>
          Please add a valid link
        </label>
      )}
    </section>
  );
}
export default Shortener;
