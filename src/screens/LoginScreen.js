import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Películas y series ilimitadas y mucho más.</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <h3>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email" />
                <button
                  onClick={() => signIn(true)}
                  className="loginScreen_getStarted"
                >
                  Comenzar
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
