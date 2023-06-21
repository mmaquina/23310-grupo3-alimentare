import Tarjeta from "./AlimentoCard";
import { React, useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';

const ENDPOINT = "https://trackapi.nutritionix.com/v2/search/instant?query="
const prods = ["almonds", "honey", "nuts", "cheese", "flour", "quinoa", "olive oil"]

export default function Alimentos() {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setAlimentos] = useState(null);

  useEffect(() => {
    let prodlist = [];

    prods.forEach(prod => {
      fetch(ENDPOINT + prod, {headers: {
        "x-app-id": process.env.REACT_APP_NUTRITIONIX_ID,
        "x-app-key": process.env.REACT_APP_NUTRITIONIX_KEY
      }})
        .then((response) => response.json())
          .then((prodj)=> {
            prodlist.push(prodj.common[0]);
            if (prodlist.length === prods.length) {
              setAlimentos(prodlist);
              setIsLoading(false);
            }
          });
      });

    console.log("prodlist",prodlist)
  }, []);

  if (isLoading || productos === null) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="relative isolate text-center">
      <h2>Alimentos</h2>
      <div className="container flex flex-wrap text-center">
        <Container className='me-auto' >
        container

          <Row md={5} className="g-5">
            row
            {productos.map((producto, index) => {
              producto.foto = producto.photo.thumb
              console.log(producto)
              return (
                <div key={index}>
                  <Tarjeta producto={producto} />
                </div>
              );
            })}
            row cierre
          </Row>

        </Container>
      </div>  
    </div>
  );
}
