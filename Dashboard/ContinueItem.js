import Card from "../UI/Card";
import styles from "./ContinueItem.module.css";
function ContinueItem(props) {
  return (
    
      <div className={styles.continueItem}>
        <h2>{props.cname}</h2>

        <div className={styles.continueItem__fin}>
          <p>{props.fin}%</p>
        </div>
      </div>
    
  );
}

export default ContinueItem;
