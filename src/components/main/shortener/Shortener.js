import React, { useState } from "react";
import styles from "./Shortener.module.css";
import classNames from "classnames";
import Button from "../../UI/Button";
import validator from "validator";
import axios from "axios";

function Shortener(props) {
  const [inputLink, setInputLink] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Handles API calls to shorten the link as well as passing data to main component to be rendered as a shortened link
  // Since this is a small scale practice app, I store the API Key in .env and .gitignore, which is otherwise NOT
  // recommended. API keys/secrets should stricty be saved in backend, which is out of the scope of this project.
  const shortenHandler = (event) => {
    event.preventDefault();

    if (validator.isURL(inputLink)) {
      axios
        .post(`https://t.ly/api/v1/link/shorten`, {
          api_token: process.env.REACT_APP_API_KEY,
          long_url: inputLink,
        })
        .then(
          (response) => {
            props.storeLinkData(response.data);
            setIsValid(true);
            setInputLink("");
          },
          (error) => {
            console.log(error);
          }
        );
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
        {!isValid && (
          <label className={styles["shortener__error"]}>
            Please add a valid link
          </label>
        )}
        <Button type="submit" text="Shorten it!" />
      </form>
    </section>
  );
}
export default Shortener;
