import React, { useState } from "react";
import Container from "../UI/Container";
import Shortener from "./shortener/Shortener";
import ShortenedLinkList from "./shortener/ShortenedLinkList";
import Features from "./features/Features";
import styles from "./Main.module.css";
function Main() {
  const [linkData, setLinkData] = useState([
    {
      inputLink: "https://www.frontendmentor.io",
      shortLink: "https://www.frontendmentor.io",
    },
  ]);

  const handleLinkData = (data) => {
    console.log("test");
    setLinkData((prevLinkData) => [...prevLinkData, data]);
  };

  return (
    <main className={styles.main}>
      <Container>
        <Shortener storeLinkData={handleLinkData} />
        <ShortenedLinkList linkData={linkData} />
        <Features />
      </Container>
    </main>
  );
}

export default Main;
