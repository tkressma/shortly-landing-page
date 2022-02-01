import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://www.frontendmentor.io" className={styles.logo}>
        <img src={logo}/>
      </a>

      <div className={styles.mobile}>
      <button className={styles.mobilemenu}>Test</button>
      </div>
      
      <NavMenu/>
    </nav>
  );
}

export default Navbar;
