import Physics from "../../images/physics.jpeg";
import Pop from "../../images/pop-cat.jpg";
import BrowseItem from "./BrowseItem";
import styles from "./Browse.module.css";
import Fill from "../UI/Fill";
import avp from "../../images/avp.jpeg";
import coa from "../../images/coa.jpeg";
import math from "../../images/math.jpeg";
function Browse() {
  const otherCourse = [
    {
      id: "c1",
      image:avp,
      description: "Amrita Value Program",
    },
    {
      id: "c2",
      image:math,
      description: "Mathematics",
    },
    {
      id: "c3",
      image:coa,
      description: "Computer Organization and Achitecture",
    }
  ];

  return (
    <>
      <h1 className={styles.browseHeader}>Browse</h1>
      <Fill>More</Fill>

      <div className={styles.browseAsd}>
        {otherCourse.map((course) => (
          <BrowseItem
            key={course.id}
            name={course.name}
            image={course.image}
            desc={course.description}
          />
        ))}
      </div>
    </>
  );
}
export default Browse;
