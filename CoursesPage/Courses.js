import BrowseItem from "../Dashboard/BrowseItem";
import styles from "./Courses.module.css";
import Navigation from "../Dashboard/Navigation";
import avp from "../../images/avp.jpeg";
import coa from "../../images/coa.jpeg";
import dsa from "../../images/dsa.jpeg";
import iot from "../../images/iot.jpeg";
import math from "../../images/math.jpeg";
import toc from "../../images/toc.jpeg";
function Course() {
  const otherCourse = [
    {
      id: "c1",
      image: avp,
      description: "Amrita Value Program",
    },
    {
      id: "c2",
      image: math,
      description: "Mathematics",
    },
    {
      id: "c3",
      image: coa,
      description: "Computer Organization and Architecture",
    },
    {
      id: "c4",
      image: dsa,
      description: "Data Structures and Algorithms",
    },
    {
      id: "c5",
      image: iot,
      description: "Internet of Things",
    },
    {
      id: "c6",
      image: toc,
      description: "Theory of Computation",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Navigation />
        {otherCourse.map((course) => (
          <BrowseItem
            key={course.id}
            image={course.image}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}

export default Course;
