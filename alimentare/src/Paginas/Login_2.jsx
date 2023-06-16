import { auth, googleProvider } from "../Componentes/firebase/FirebaseConfig";
import { signInWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import '../Style/Login_2.css';
import { Button } from "react-bootstrap";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let usuario = auth?.currentUser?.email;
  console.log("Usuario: " + usuario);

  const signIn = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setMessage("Bienvenido: " + auth.email ); //TODO muestra el usuario logeado como undefined
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        switch (errorCode) {
          case "auth/wrong-password":
            setMessage("La contraseña es incorrecta");
            break;
          case "auth/user-not-found":
            setMessage("El usuario no ha sido encontrado");
            break;
          case "auth/invalid-email":
            setMessage("El correo electrónico es inválido");
            break;
          case "auth/missing-password":
            setMessage("La contraseña no ha sido proporcionada");
            break;
          default:
            setMessage("");
            break;
        }        
      });
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
        </div>
        <div className="button-container">
          <Button variant="success" onClick={signIn}>Enviar</Button>
        </div>
        <p>{message}</p>
        <br></br>
        <p>
          <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
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
