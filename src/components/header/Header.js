import React from "react";
import Container from "../UI/Container";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
