import styles from "./ShortenedLinkList.module.css";
import ShortenedLink from "./ShortenedLink";

const ShortenedLinkList = (props) => {
  return (
    <ul className={styles.links}>
      {props.linkData.map((data, index) => (
        <ShortenedLink
          key={index}
          longURL={data["long_url"]}
          shortURL={data["short_url"]}
        />
      ))}
    </ul>
  );
};

export default ShortenedLinkList;
