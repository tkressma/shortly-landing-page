import styles from "./ButtonCTA.module.css"

function ButtonCTA(props) {
    return <button className={styles.button}>{props.text}</button>;
}

export default ButtonCTA;