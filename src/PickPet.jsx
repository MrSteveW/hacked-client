import { Link } from "react-router-dom";
import "./PickPet.css";

function PickPet() {
  return (
    <div className="signUpSp1">
      <div className="signUpBSp">
        <h1 className="SignUpTit">Meet Your Pet!</h1>

        {/* Main Image Placeholder */}
        <div className="subjectBox">
          <img
            src="/public/images/panda.png" // leave blank for now
            alt="Your Pet"
            className="petImage"
          />
        </div>

        {/* Buttons at the bottom */}
        <div className="formButtons">
          <Link to="/" className="BnSButton">
            Back
          </Link>

          <button className="BnSButton" type="button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PickPet;