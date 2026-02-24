import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling server errors

  const handleClick = async () => {
    try {
      // Send POST request to Flask backend
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/subjects"); // Redirect on success
      } else {
        setError(data.message || "Signup failed"); // Show error from server
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Sign Up</h1>

        <form className="formSp" onSubmit={(e) => e.preventDefault()}>
          <input
            className="formInp"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="formInp"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="formInp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="formButtons">
            <Link to="/" className="BnSButton">
              Back
            </Link>

            <button className="BnSButton" type="button" onClick={handleClick}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;