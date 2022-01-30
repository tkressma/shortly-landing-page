import React from "react";
import Container from "../UI/Container";
import styles from "./Header.module.css";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className={styles.header}>
      <Container>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
