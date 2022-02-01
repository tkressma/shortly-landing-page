import styles from "./ShortenedLinkList.module.css";
import ShortenedLink from "./ShortenedLink";

const ShortenedLinkList = (props) => {
  return (
    <ul className={styles.links}>
      <ShortenedLink />
      <ShortenedLink />
      <ShortenedLink />
    </ul>
  );
};

export default ShortenedLinkList;
