import React from "react";
import Container from "../UI/Container";
import Shortener from "./Shortener";
function Main(props) {
  return (
    <main>
      <Container>
        <Shortener />
        <h2>Advanced Statistics</h2>
      </Container>
    </main>
  );
}

export default Main;