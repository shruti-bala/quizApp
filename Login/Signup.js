import styles from "./Signup.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const enteredName = useRef();
  const enteredUsername = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredRole = useRef();
  
  function signupHandeler(event) {
    event.preventDefault();
    console.log("Signup handeller");

    const username = enteredName.current.value;
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    const role = enteredRole.current.value;

    const url = "http://localhost:3001/signup?";
    const params = {
      username: username,
      email: email,
      password: password,
      role: role
    };

    console.log(url + new URLSearchParams(params));

    fetch(url + new URLSearchParams(params), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.auth) {
          navigate("/");
        }
        else{
          alert("couldn't signin");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  return (
    <div className={styles.background}>
      {/* <p>"Welcome to our Quiz app" */}

      <div className={styles.formBox}>
        <form>
          <div className={styles.header}>
            <h2>Sign Up </h2>
          </div>
          <div className={styles.userInfo}>
            <input type="text" placeholder="Name" ref={enteredName}></input>

            <input type="text" placeholder="Username" ref={enteredUsername}></input>

            <input type="text" placeholder="Email" ref={enteredEmail}></input>

            <input type="text" placeholder="Password" ref={enteredPassword}></input>

            <select name="Role" ref={enteredRole}>
              <option value="StudentDashboard">Student</option>
              <option value="MentorDash">Mentor</option>
              <option value="AdminDash">Admin</option>
            </select>
          </div>
          {/* <p>Forgot password?</p> */}
          <button onClick={() => navigate("/")}>Login</button>
          <button onClick={signupHandeler}>Sign up</button>
          {/* <button > Already a memeber?  Login</button>
            <button >Sign up</button> */}
        </form>
      </div>
      {/* </p> */}
    </div>
  );
}
export default Signup;
