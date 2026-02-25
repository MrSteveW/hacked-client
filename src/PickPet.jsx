import { Link, useNavigate } from "react-router-dom";
import "./PickPet.css";

function PickPet() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/namepet");
  };

  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Meet Your Pet!</h1>
        {/* Main Image */}
        <div className="subjectBox">
          <img
            src="/images/panda.png" 
            alt="Your Pet"
            className="petImage"
          />
        </div>
        {/* Buttons */}
        <div className="formButtons">
          <Link to="/" className="BnSButton">
            Back
          </Link>
          <button 
            className="BnSButton" 
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PickPet;