import { Link } from "react-router-dom";
import './Signup.css'

function Signup() {
    return(
        <>
        <div class="signUpSp1">
            <div class="signUpBSp">
                <h1 class="SignUpTit"> Sign Up </h1>
                <form>
                    <input type="email" id="email" name="email" placeholder="email"></input>
                    <input placeholder="Username" type="text" id="username" name="username"></input>
                    <input placeholder="Password" type="password" id="password" name="password"></input>
                    <Link to='/' class="BNButton"> Back </Link>
                    <input type="submit" id="submit" name="submit"></input>
                </form> 
            </div>
                
        </div>
        </>
    )
};

export default Signup;