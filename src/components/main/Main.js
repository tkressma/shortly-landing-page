import React, { useState } from "react";
import Container from "../UI/Container";
import Shortener from "./Shortener";
import ShortenedLinkList from "./ShortenedLinkList";
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
      </Container>
    </main>
  );
}

export default Main;
