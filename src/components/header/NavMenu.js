import styles from "./NavMenu.module.css"
import NavigationLink from "../UI/NavigationLink"
import ButtonCTA from "../UI/ButtonCTA";

function NavMenu() {
    return (
        <div className={styles.navigation}>
        <ul className={styles.menu} role="navigation" aria-label="Main navigation links">
          <li className={styles["menu__option"]}>
             <NavigationLink text="Products"/>
          </li>
          <li className={styles["menu__option"]}>
            <NavigationLink text="Pricing"/>
          </li>
          <li className={styles["menu__option"]}>
            <NavigationLink text="Resources"/>
          </li>
        </ul>
  
        <div className={styles["menu__buttons"]} role="navigation" aria-label="Login or Sign up">
        <NavigationLink text="Login"/>
        <ButtonCTA text="Sign Up"/>
        </div>
        </div>
    )
}

export default NavMenu;