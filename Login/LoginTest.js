import styles from "./LoginTest.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import popCat from "../../images/pop-cat.jpg";
import { MongoClient } from "mongodb";
function Login() {
  let navigate = useNavigate();
  const enteredUsername = useRef();
  const enteredPass = useRef();
  const enteredRole = useRef();
  function loginHandler(event) {
    event.preventDefault();
    const uname = enteredUsername.current.value;
    const pass = enteredPass.current.value;
    const role = enteredRole.current.value;
    if (role === "Student") {
      navigate("/StudentDashboard");
    }
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <form>
          <div className={styles.header}>
            <h2>Welcome Back!</h2>
            <p>quiz app</p>
          </div>
          <div className={styles.userInfo}>
            <input
              type="text"
              placeholder="Username"
              ref={enteredUsername}
              required
            ></input>
            <input type="text" placeholder="Password" ref={enteredPass} required></input>
            <label for="Role">Role:</label>
            <select name="Role" ref={enteredRole}>
              <option value="StudentDashboard">Student</option>
              <option value="MentorDash">Mentor</option>
              <option value="AdminDash">Admin</option>
            </select>
          </div>
          <p>Forgot password?</p>
          <button onClick={loginHandler}>Login</button>
          <button>Sign up</button>
        </form>
        <div className={styles.picture}>
          <img src={popCat} alt="pop cat"></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
