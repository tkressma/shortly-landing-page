import styles from "./Button.module.css";
import classNames from "classnames";

function Button(props) {
  return (
    <button
      className={classNames(styles.button, props.copied && styles.active)}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
