import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NamePet.css";

function NamePet() {
  const [petName, setPetName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleConfirm = async () => {
    if (petName.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5001/namepet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ petName }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Pet name saved:", data);
        navigate("/home");
      } else {
        setError(data.message || "Failed to save pet name");
      }
    } catch (err) {
      console.error("Server error:", err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Name Your Pet</h1>

        <div className="formSp">
          <input
            type="text"
            placeholder="Enter pet name..."
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="formInp"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="formButtons">
          <Link to="/meetpet" className="BnSButton">
            Back
          </Link>

          <button className="BnSButton" onClick={handleConfirm}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default NamePet;