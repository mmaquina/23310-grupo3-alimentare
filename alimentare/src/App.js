import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar Componentes
import NavBar from './components/Navbar';
import Inicio from './components/Inicio';
import Agendas from './components/Agendas';
import Calendarios from './components/Calendarios';
import Cuadernos from './components/Cuadernos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

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

      </Routes>
          
     <Footer/>

    </>
  );
}

export default App;