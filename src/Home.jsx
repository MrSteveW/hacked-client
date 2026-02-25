import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="signUpSp1">
      <div className="homeContainer">

        {/* Pet Name */}
        <h1 className="petName">STUDY PET</h1>

        {/* Pet Image */}
        <div className="petImageWrapper">
          <img
            src="/public/images/panda.png" // add pet image here
            alt="Your Pet"
            className="petImage"
          />
        </div>

        {/* Bottom Navbar */}
        <div className="bottomNav">
          <Link to="/feed" className="BnSButton">Feed</Link>
          <Link to="/statistics" className="BnSButton">Statistics</Link>
          <Link to="/shop" className="BnSButton">Learn</Link>
        </div>

      </div>
    </div>
  );
}

export default Home;