import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import NavMenu from "./NavMenu";
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
  const [menuStatus, setmenuStatus] = useState(false);

  const toggleMenu = () => {
    setmenuStatus(!menuStatus);
  }

  return (
    <nav className={styles.navbar}>
      <a href="https://www.frontendmentor.io" className={styles.logo}>
        <img src={logo} alt="Shortly Logo" />
      </a>

      <div className={styles.mobile}>
        <Hamburger size="30" color="#9E9AA8" label="Open navigation menu" hideOutline={false}
          onToggle={toggleMenu}
        />
      </div>
      
      <NavMenu isOpen={menuStatus} />
    </nav>
  );
}

export default Navbar;
