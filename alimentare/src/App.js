import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar Componentes
import NavBar from './Componentes/Navbar';
import Footer from './Componentes/Footer';

import Inicio from './Paginas/Inicio';
import Recetas from './Paginas/Recetas';
import Alimentos from './Paginas/Alimentos';
import Contacto from './Paginas/Contacto';
import Login from './Paginas/Login_2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from "./Componentes/RegistroUsuario";
import SubirReceta from "./Componentes/SubirReceta";


function App() {
  return (
    <>
      <NavBar/>
      
      <Routes>
         <Route path='/'element={ <Inicio />}/>
         <Route path='/Recetas' element={ <Recetas/>}/>
         <Route path='/Alimentos' element={ <Alimentos/>}/>
         <Route path='/Login' element={ <Login/>}/>
         <Route path='/Contacto'  element={<Contacto/>}/>
         <Route path='/Registro'  element={<Registro/>}/>
         <Route path='/SubirReceta' element={ <SubirReceta/>}/>

      </Routes>
          
     <Footer/>

    </>
  );
}

export default App;