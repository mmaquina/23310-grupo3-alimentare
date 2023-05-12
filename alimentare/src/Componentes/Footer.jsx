import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from '../Imagenes/alimentare.png'

export const Footer = () => {
  return (
   
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy;Alimentare </p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use link="#Logo"/></svg>
    </a>

     <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/Recetas" className="nav-link px-2 text-body-secondary">Recetas</a></li>
      <li className="nav-item"><a href="/Alimentos" className="nav-link px-2 text-body-secondary">Alimentos</a></li>
      <li className="nav-item"><a href="/Login" className="nav-link px-2 text-body-secondary">Login</a></li>
      <li className="nav-item"><a href="/Contacto" className="nav-link px-2 text-body-secondary">Contacto</a></li>
    </ul>
    <FloatingWhatsApp
        phoneNumber="+5491131070014"
        accountName="Alimentare"
        statusMessage="Normalmente responde en 1 hora"
        chatMessage="¡Hola! 🤝 ¿Cómo te podemos ayudar?"
        allowEsc
        allowClickAway
        notification
        notificationSound
        placeholder="Escribe tu mensaje.."
        avatar={Logo}
      />
  </footer>
</div>
  )
}
export default Footer