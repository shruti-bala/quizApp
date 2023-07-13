import styles from "./Login.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../images/login.png";
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
      <img src={login} className={styles.backImg} />
      <div className={styles.loginBox}>
        <form>
          <div className={styles.header}>
            <h2>Welcome Back!</h2>
          </div>
          <div className={styles.userInfo}>
            <input
              type="text"
              placeholder="Username"
              ref={enteredUsername}
            ></input>
            <input
              type="password"
              placeholder="Password"
              ref={enteredPass}
            ></input>

            <select name="Role" ref={enteredRole}>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
              <option value="Admin">Admin</option>
            </select>
            <p>Forgot password?</p>
            <button className={styles.btn} onClick={loginHandler}>
              Login
            </button>
            <button
              className={styles.btn}
              onClick={() => navigate("/SignupTest")}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
