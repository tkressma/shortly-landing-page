import styles from "./FeatureCard.module.css";
function FeatureCard(props) {
  return (
    <article className={styles["feature-card"]}>
      <figure>
        <img src={props.icon} alt={props.altText} />
      </figure>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default FeatureCard;
