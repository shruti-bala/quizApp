import React from 'react';
import styles from "./AdminDash.module.css";
import Graph from "../Dashboard/Graph";
import Card from "../UI/Card";
import SideBar from "../UI/SideBar";
import UsersReach from "./UsersReach";
function Aanalytics() {
  const attributes = [
    {
      name: "Analytics",
      link: "/Aanalytics",
    },
    {
      name: "Mentor Management",
      link: "/Coursedesc",
    },
    {
      name: "Quiz Management",
      link: "/Coursedesc",
    },
    {
      name: "Student Management",
      link: "/Coursedesc",
    },
    {
      name: "Notifications",
      link: "/Anotifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];

  return (
    <>
      <div className={styles.body}>
        <SideBar attributeList={attributes} />
        
        <div className={styles.graphContainer}>
          <div className={styles.graphWrapper}>
            <UsersReach className={styles.graph} />
          </div>
          <div className={styles.graphWrapper}>
            <Graph className={styles.graph} />

          </div>
         
        </div>
        <br></br><br></br><br></br><br></br> <br></br>   <br></br><br></br><br></br><br></br> <br></br>   <br></br><br></br><br></br><br></br>       
      </div>
    </>
  );
}

export default Aanalytics;
