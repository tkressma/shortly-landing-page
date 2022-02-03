import styles from "./Boost.module.css";
import ButtonCTA from "../UI/ButtonCTA";
function Boost() {
  return (
    <section className={styles["cta-section"]}>
      <h2>Boost your links today</h2>
      <ButtonCTA text="Get Started" />
    </section>
  );
}

export default Boost;
