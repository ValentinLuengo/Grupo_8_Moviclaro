import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard';

let productTotal = {
    color:   "primary",
    titulo: "Totales de Productos",
    icono: "fa-mobile-alt",
}

let ofertaTotals ={
    color:   "success",
    titulo: "Total Ofertas",
    
    icono: "far fa-bell",
}

let promoTotal = {
    color:   "warning",
    titulo: "Total Promociones",
    icono: "fas fa-percent",
}

let cardProps = [productTotal,ofertaTotals,promoTotal];


function ContentTop(){
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((card) => {
                console.log(card.meta);
                setCard(card.meta);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
        {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            } 
        </div>
        </React.Fragment>
    )
}
export default ContentTop;