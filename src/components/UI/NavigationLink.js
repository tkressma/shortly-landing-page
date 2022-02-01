import styles from "./NavigationLink.module.css";

function NavigationLink(props) {
    return <a href="#" className={styles.link}>{props.text}</a>;
}

export default NavigationLink;