import React from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="https://www.frontendmentor.io">
        <img src={logo} />
      </a>
      <ul className={styles.menu}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
