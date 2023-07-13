import SideBar from "./SideBar";
import Navigation from "../Dashboard/Navigation";
import PersonalDetails from "./PersonalDetails";
import styles from "./Profile.module.css";
function Profile() {
  return (
    <>
      <Navigation />
      
      <SideBar />
      <div className={styles.pd}>
        <PersonalDetails />
      </div>
    </>
  );
}

export default Profile;
