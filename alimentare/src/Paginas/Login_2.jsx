import { auth, googleProvider } from "../Componentes/firebase/FirebaseConfig";
import { signInWithEmailAndPassword, getAuth, signInWithPopup,  } from "firebase/auth";
import React, { useState } from "react";
//import ReactDOM from "react-dom";
import '../Style/Login_2.css';

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

  const signInWithGoogle = async ()=>{
    try {
      await signInWithPopup(auth,googleProvider)

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

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Correo electronico </label>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" onClick={signIn} />
        </div>
        <br></br>
        <p>
          <button onClick={signInWithGoogle} >Iniciar sesión con Google</button>
        </p>

        <p>
          <a class="text-muted link-info" href="#!" >¿Olvidaste tu password?</a>
        </p>
        <p>¿Todavía no tenés una cuenta? <a href='/Registro' class="link-info">Registrate</a>
        </p>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>El usuario ha iniciado sesión con éxito</div> : renderForm}
      </div>
    </div>
  );
}

export default App;