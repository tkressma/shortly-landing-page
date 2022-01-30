import React from "react";
import Container from "../UI/Container";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <Container>
        I am testing out something I am testing out something I am testing out
        something I am testing out something I am testing out something I am
        testing out something I am testing out something I am testing out
        something I am testing out something I am testing out something I am
        testing out something
      </Container>
    </header>
  );
}

export default Header;
