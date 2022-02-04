import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import Container from "../UI/Container";
import facebookIcon from "../../assets/icon-facebook.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer__container"]}>
        <figure>
          <img className={styles.logo} src={logo} alt="Shortly logo" />
        </figure>
        <nav className={styles["footer__menu"]}>
          <ul className={styles["footer__category"]}>
            <li>
              <p className={styles["footer__category_title"]}>Featured</p>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Link Shortening</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Branded Links</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Analytics</a>
            </li>
          </ul>

          <ul className={styles["footer__category"]}>
            <li>
              <p className={styles["footer__category_title"]}>Resources</p>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Blog</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Developers</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Support</a>
            </li>
          </ul>

          <ul className={styles["footer__category"]}>
            <li>
              <p className={styles["footer__category_title"]}>Company</p>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">About</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Our Team</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Careers</a>
            </li>
            <li className={styles["footer__link"]}>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className={styles["footer__social_links"]}>
            <li>
              <a href="https://wwww.facebook.com/" aria-label="Facebook link">
                <img
                  src={facebookIcon}
                  className={styles.icon}
                  alt="Facebook logo"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en" aria-label="Twitter link">
                <img
                  src={twitterIcon}
                  className={styles.icon}
                  alt="Twitter logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" aria-label="Pinterest link">
                <img
                  src={pinterestIcon}
                  className={styles.icon}
                  alt="Pinterest logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" aria-label="Instagram link">
                <img
                  src={instagramIcon}
                  className={styles.icon}
                  alt="Instagram logo"
                />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
