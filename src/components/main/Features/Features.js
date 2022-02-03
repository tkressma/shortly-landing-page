import React from "react";
import styles from "./Features.module.css";
import FeatureCards from "./FeatureCards";
function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles["features__h2"]}>Advanced Features</h2>
      <p className={styles["features__p"]}>
        Track how your links are performing across the web with our advanced
        Features dashboard.
      </p>
      <FeatureCards />
    </section>
  );
}

export default Features;
