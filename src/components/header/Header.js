import React from "react";
import Container from "../UI/Container";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Header(props) {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
        <Hero/>
      </Container>
    </header>
  );
}

export default Header;
