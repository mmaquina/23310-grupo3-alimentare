import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar Componentes
import NavBar from './Componentes/Navbar';
import Footer from './Componentes/Footer';

//Importar Paginas
import Inicio from './Paginas/Inicio';
import Recetas from './Paginas/Recetas';
import Alimentos from './Paginas/Alimentos';
import Contacto from './Paginas/Contacto';
import Login from './Paginas/Login_2';

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
      </Routes>
          
     <Footer/>

    </>
  );
}

export default App;