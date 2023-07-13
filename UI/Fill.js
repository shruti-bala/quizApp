import styles from "./Fill.module.css";
function Fill(props) {
  return <button className={styles.fill}>{props.children}</button>;
}
export default Fill;
