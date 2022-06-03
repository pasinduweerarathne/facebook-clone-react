import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  // firebase, sign with google
  const signIn = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img src="images/facebook_logo.png" alt="" />
        <img src="images/facebook-logo2.png" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
