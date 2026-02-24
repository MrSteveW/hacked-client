import { Link } from "react-router-dom";
import './Signup.css'

function Signup() {

    async function signup() {
    if (password1 === password2 & range & capital & number & special){
      const res = await fetch("http://localhost:5001/signup", {
        method:"POST",
        credentials:"include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password
        })
      })
      setError(res.status)
    } 
    else {
      setErrorText(null)
      setError(null)
    }
  }
    return(
        <>
        <div class="signUpSp1">
            <div class="signUpBSp">
                <h1 class="SignUpTit"> Sign Up </h1>
                <form class="formSp">
                    <input class="formInp" type="email" id="email" name="email" placeholder="Email"></input>
                    <input class="formInp" placeholder="Username" type="text" id="username" name="username"></input>
                    <input class="formInp" placeholder="Password" type="password" id="password" name="password"></input>
                    <div class="formButtons">
                        <Link to='/' class="BnSButton"> Back </Link>
                        <input  class="BnSButton" type="submit" id="submit" name="submit"></input>
                    </div>
                </form> 
            </div>
        </div>
        </>
    )
};

export default Signup;