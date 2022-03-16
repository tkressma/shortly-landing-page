import styles from "./NavMenu.module.css";
import NavigationLink from "../UI/NavigationLink";
import ButtonCTA from "../UI/ButtonCTA";
import classNames from "classnames";

function NavMenu(props) {
  return (
    <div
      className={classNames(styles.navigation, props.isOpen && styles.open)}
      role="navigation"
    >
      <ul className={styles.menu} aria-label="Main navigation links">
        <li className={styles["menu__option"]}>
          <NavigationLink text="Products" />
        </li>
        <li className={styles["menu__option"]}>
          <NavigationLink text="Pricing" />
        </li>
        <li className={styles["menu__option"]}>
          <NavigationLink text="Resources" />
        </li>
      </ul>

      <div
        className={styles["menu__buttons"]}
        role="navigation"
        aria-label="Login or Sign up"
      >
        <NavigationLink text="Login" />
        <ButtonCTA text="Sign Up" />
      </div>
    </div>
  );
}

export default NavMenu;
