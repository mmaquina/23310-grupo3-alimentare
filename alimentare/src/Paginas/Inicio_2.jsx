import "../Style/Inicio_2.css";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import CardImagen from '../Imagenes/verduras.png'
// import { Container} from 'react-bootstrap';


function card() {
  return (
    
<div className="container_i">
        <div className="card" style="--clr: #009688">
            <div className="img-box">
                <img src="https://i.postimg.cc/t4w95jsf/img-01.png"/>
            </div>
            <div className="content">
                <h2>Leafs</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style="--clr: #FF3E7F">
            <div className="img-box">
                <img src="https://i.postimg.cc/pdjRc68d/img-02.png"/>
            </div>
            <div className="content">
                <h2>Fruits</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style="--clr: #03A9F4">
            <div className="img-box">
                <img src="https://i.postimg.cc/26fms7F7/img-03.png"/>
            </div>
            <div className="content">
                <h2>Flowers</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
    </div>
  );
}

export default card;