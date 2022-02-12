import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentTop() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((card) => {
                console.log(card.meta);
                setCard(card.meta);
                // console.log(cardProps);
            })
            .catch((error) => console.log(error));
    }, []);
    let productTotal ={
        color: "primary",
        titulo: "Totales de Productos",
        icono: "fa-mobile-alt",
        total: card.total,
    }
    let ofertaTotals = {
        color: "success",
        titulo: "Total Ofertas",
        icono: "far fa-bell",
        total: card.cantidad_ofertas,
        // cantidad_ofertas: ""
    };
    
    let promoTotal = {
        color: "warning",
        titulo: "Total Promociones",
        icono: "fas fa-percent",
        total: card.cantidad_promociones,
        // cantidad_promociones: ""
    };
    let cardProps = [productTotal, ofertaTotals, promoTotal];
    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {cardProps.map((producto, index) => {
                    return <SmallCard {...producto} key={index} />;
                })}
            </div>
        </React.Fragment>
    );
}
export default ContentTop;
