import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Subjects.css";

function Subjects() {
  const navigate = useNavigate();

  const subjects = [
    { name: "Maths", id: 1 },
    { name: "English", id: 2 },
    { name: "Science", id: 3 },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  // Handle selecting a subject from the dropdown
  const handleSelect = (subject) => {
    setSelectedSubject(subject);
    setDropdownOpen(false); // close dropdown
    console.log("Selected subject:", subject);
  };

  // Handle clicking Next
  const handleClick = async () => {
    if (!selectedSubject) return; // button should already be disabled if null

    // Navigate immediately
    navigate("/pickpet");

    // Send to backend in background
    try {
      const response = await fetch("http://localhost:5001/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject_id: selectedSubject.id }),
      });

      const data = await response.json();
      console.log("Response from Flask:", data);
    } catch (error) {
      console.error("Error sending subject to backend:", error);
    }
  };

  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Subjects</h1>

        <div className="subjectBox">
          <h2>What subjects would you like to study?</h2>

          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedSubject ? selectedSubject.name : "Select Subject"}
            </div>

            {dropdownOpen && (
              <div className="dropdown-content">
                {subjects.map((sub) => (
                  <div
                    key={sub.id}
                    className={`dropdown-item ${
                      selectedSubject?.id === sub.id ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(sub)}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="formButtons">
          <Link to="/" className="BnSButton">
            Back
          </Link>
          <button
            className="BnSButton"
            type="button"
            onClick={handleClick}
            disabled={!selectedSubject} // disabled until a subject is selected
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subjects;