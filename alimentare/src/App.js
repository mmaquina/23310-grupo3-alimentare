import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import LoginComponent from "./componentes/login.jsx";


//Importar Componentes
import LoginComponent from "./componentes/login";
 import navbarPrincipal from './componentes/Navbar';
// import Inicio from './components/Inicio';
// import Agendas from './components/Agendas';
// import Calendarios from './components/Calendarios';
// import Cuadernos from './components/Cuadernos';
// import Contacto from './components/Contacto';
 import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <navbarPrincipal/>
      <LoginComponent/>
      
      {/* <Routes>
         <Route path='/'element={ <Inicio />}/>
         <Route path='/Agendas' element={ <Agendas/>}/>
         <Route path='/Calendarios' element={ <Calendarios/>}/>
         <Route path='/Cuadernos' element={ <Cuadernos/>}/>
         <Route path='/Contacto'  element={<Contacto/>}/>
      </Routes> */}
          
      <Footer/>

    </>
  );
}

export default App;
