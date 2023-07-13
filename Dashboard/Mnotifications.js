//import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./MentorDash.module.css";
import NotificationsList from "../appnotifications/appnotif";
//import Navigation from "./mentorNavigation";

import Graph from "./mentor_bargraph";
import PieGraph from "./mentor_piechart";
import Mentorcard from "./mentorCards";
import SideBar from "../UI/SideBar";
function Mnotifications() {
  
     const attributes = [
    {
      name: "Analytics",
      link: "/Manalytics",
    },
    {
      name: "Edit",
      link: "/Coursedesc",
    },
    {
      name: "Queries",
      link: "/Coursedesc",
    },
    {
      name: "Notifications",
      link: "/Mnotifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];
  return (
    <>
    <body>
      <SideBar attributeList = {attributes} />
      <div className={styles.container}>
      <br></br>
      <div style={{ border: '5px solid black', borderRadius: '20px' }}>
      
  <h2 style={{ color: 'black' }}>Course Name: Internet Of Things</h2>
  <h2 style={{ color: 'black' }}>Mentor Name: Ms Nalina Devi</h2>
</div>

      <div className={styles.star}>
      {/* <div className={styles.browseBox}> */}
      <NotificationsList ></NotificationsList>
        
      
     
      {/* </div> */}
      <Footer></Footer>
      </div>
      </div>
      </body>
    </>
  );
}

export default Mnotifications;