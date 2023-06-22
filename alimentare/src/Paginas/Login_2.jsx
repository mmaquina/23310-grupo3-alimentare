import { auth, googleProvider } from "../Componentes/firebase/FirebaseConfig";
import { signInWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import '../Style/Login_2.css';

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
        setMessage("Bienvenido " + userCredential.user.email ); 
        limpiarFormulario();
        window.location='/Recetas';
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
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
        limpiarFormulario();   
      });
  };

  function limpiarFormulario() {   
    
    document.getElementById('email').value = ''; 
    document.getElementById('pass').value = ''; 
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      limpiarFormulario();
      setMessage("Bienvenido");
    } catch (error) {
      console.log(error);
      limpiarFormulario();
      setMessage("Error al iniciar sesión con Google");
    }
  };

  const renderForm = (
    <div id="formularioLogin" className="form">
      <form>
        <div className="input-container">
          <label>Correo electronico </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>
        <div className="button-container">
          <Button variant="success" onClick={signIn}>Enviar</Button>
        </div>
        {/* Muestra el mensaje que devuelve la base de datos */}
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
