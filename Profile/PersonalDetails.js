import styles from "./PersonalDetails.module.css";
import profile from "../../images/profile2.jpeg";
// import styles from "..Login/Footer.module.css";

function PersonalDetails() {
  return (
    <>
    
    <div className={styles.banner1}>
    
        <img src={profile}></img>
      </div>
      
      
      <div className = {styles.table1}>
  
      <table>
        <tr>
        <td >First Name</td>
        <td >ABC</td>
        
        
        </tr>
        
        <tr>
        <td >Last Name</td>
        <td > XYZ</td>
        </tr>

        <tr>
        <td >Date of Birth</td>
        <td > January 25, 2003</td>
        </tr>
        
        <tr>
        <td >Country of Birth</td>
        <td >India</td>
        </tr>
        
        <tr>
        <td >Phone Number</td>
        <td > 1234567890</td>
        
        </tr>
        
        <tr>
        <td >Student ID</td>
        <td >20457</td>
       
        </tr>
        
        <tr>
        <td >School/ College name</td>
        <td >POP</td>
        </tr>
        
        <tr>
        <td >Alternative Number</td>
        <td >0987654321</td>
        </tr>
        
       
        </table>

        
      </div>
      

      
    </>
  );
}

export default PersonalDetails;