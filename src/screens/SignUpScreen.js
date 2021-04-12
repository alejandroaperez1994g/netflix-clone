import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Inicia Sesión</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Inicia Sesión</button>
      </form>
    </div>
  );
}

export default SignUpScreen;
