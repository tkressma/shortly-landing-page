import React from "react";
import Container from "../UI/Container";
import Shortener from "./Shortener";
import ShortenedLinkList from "./ShortenedLinkList";
import styles from "./Main.module.css";
function Main(props) {
  return (
    <main>
      <Container>
        <Shortener />
        <ShortenedLinkList />
        <h2>Advanced Statistics</h2>
      </Container>
    </main>
  );
}

export default Main;
