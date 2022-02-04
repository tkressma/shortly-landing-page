import React, { useState, useEffect } from "react";
import Container from "../UI/Container";
import Shortener from "./shortener/Shortener";
import ShortenedLinkList from "./shortener/ShortenedLinkList";
import Features from "./features/Features";
import Boost from "./Boost";
import styles from "./Main.module.css";
function Main() {
  const [linkData, setLinkData] = useState(() => {
    const localData = localStorage.getItem("url_data");
    return localData !== null ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("url_data", JSON.stringify(linkData));
  }, [linkData]);

  const handleLinkData = (data) => {
    setLinkData((prevLinkData) => [...prevLinkData, data]);
  };

  return (
    <main className={styles.main}>
      <Container>
        <Shortener storeLinkData={handleLinkData} />
        <ShortenedLinkList linkData={linkData} />
        <Features />
      </Container>
      <Boost />
    </main>
  );
}

export default Main;
