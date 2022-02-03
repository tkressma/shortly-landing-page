import styles from "./ShortenedLinkList.module.css";
import ShortenedLink from "./ShortenedLink";

const ShortenedLinkList = (props) => {
  return (
    <ul className={styles.links}>
      {props.linkData.map((data) => (
        <ShortenedLink
          key={data.inputLink}
          inputLink={data.inputLink}
          shortLink={data.shortLink}
        />
      ))}
    </ul>
  );
};

export default ShortenedLinkList;
