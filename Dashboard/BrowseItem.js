import styles from "./BrowseItem.module.css";
import Pulse from "../UI/Pulse";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

function BrowseItem(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    
      navigate("/coursedesc");
    
  };

  return (
    <Card className={styles.browseItem}>
      <div className={styles.star}>
        <img src={props.image} alt={props.desc} />
        <h1>{props.name}</h1>
        <hr />
        <p>{props.desc}</p>
         
          <Pulse onClick={handleClick}>Learn More</Pulse>
        
      </div>
    </Card>
  );
}

export default BrowseItem;
