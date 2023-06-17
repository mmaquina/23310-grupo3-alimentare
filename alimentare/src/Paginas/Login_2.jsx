import { auth, googleProvider } from "../Componentes/firebase/FirebaseConfig";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, } from "firebase/auth";

import React, { useState } from "react";
import '../Style/Login_2.css';
import { Button } from "react-bootstrap";

function App() {
  // React States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(auth?.currentUser?.email)//Para saber quien esta logueado. ademas los signos de interrogacion sirven para indicar que no lea una variable antes de que tenga valor por eso no da error si no hay nadie logueado


  const signIn = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)

    } catch (error) {
      console.log(error)
    }
  };

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid email",
    pass: "invalid password"
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage("Bienvenido: " + auth.email);
    } catch (error) {
      console.log(error);
      setMessage("Error al iniciar sesión con Google");
    }
  };

  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Correo electronico </label>
          <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          name="uname" 
          required 
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          name="pass" 
          required 
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" onClick={signIn} />
        </div>
        <p>{message}</p>
        <br></br>
        <p>
          <button onClick={signInWithGoogle} >Iniciar sesión con Google</button>
        </p>

        <p>
          <a class="text-muted link-info" href="#!" >¿Olvidaste tu password?</a>
        </p>

        <p>
          <a className="text-muted link-info" href="#!">
            ¿Olvidaste tu password?
          </a>
        </p>
        <p>
          ¿Todavía no tenés una cuenta?
          <a href="/Registro" className="link-info">
            Registrate
          </a>
        </p>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {renderForm}
      </div>
    </div>
  );
}

export default App;
