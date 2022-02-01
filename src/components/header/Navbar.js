import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import NavMenu from "./NavMenu";
import { Squash as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="https://www.frontendmentor.io" className={styles.logo}>
        <img src={logo} alt="Shortly Logo" />
      </a>

      {isMobile && (
        <Hamburger
          className={styles.mobile}
          size="40"
          distance="sm"
          color="#9E9AA8"
          label="Open navigation menu"
          hideOutline={false}
          onToggle={toggleMenu}
        />
      )}

      <NavMenu isOpen={menuOpen} />
    </nav>
  );
}

export default Navbar;
