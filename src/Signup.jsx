import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      const res = await fetch("http://localhost:5001/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      const data = await res.json();
      console.log("Server response:", data);

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Sign Up</h1>

        <form className="formSp" onSubmit={handleSubmit}>
          <input
            className="formInp"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="formInp"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="formInp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="formButtons">
            <Link to="/" className="BnSButton">
              Back
            </Link>

            <button className="BnSButton" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;