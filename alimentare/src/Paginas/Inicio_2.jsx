import React from 'react'
import ReactDOM from 'react-dom'
import "../Style/Inicio_2.css";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import CardImagen from '../Imagenes/verduras.png'
// import { Container} from 'react-bootstrap';

class ReactCard extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
                    date: new Date(),
                    name: "Zae",
                    rel: "friends"};
     }
   changeName = (e) =>{
          this.setState({name: e.target.value});
        }
     render(){
       return(
        <div className="card">
         <div className="card-body">
           <h5 className="card-title">Hello {this.state.name}!</h5>
           <p className="card-text">Let´s be {this.state.rel} since today {this.state.date.toLocaleTimeString()}.</p>      
           <form>
             <div className="form-group">
               <label>Tell me your name </label>
               <input type="text" className="form-control" id="exampleInputText"  onChange = {this.changeName} />
             </div>
           </form>
         </div>
       </div>
       )
     }  
   }
   
   ReactDOM.render(<ReactCard />, document.getElementById('reactCard'));