import "./SideBar.css";
import { useNavigate } from "react-router-dom";
function SideBar(props) {
  let navigate = useNavigate();
  return (
    <>
      <div class="vertical-nav">
        <ul className="listOptions">
          {props.attributeList.map((attribute) => (
            <li onClick={() => navigate(attribute.link)}>{attribute.name}</li>
          ))}
          <li onClick={() => navigate("/StudentDashboard")}>Home</li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
