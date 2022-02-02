import React, { Fragment } from "react";
import '../assets/styles/normalize.css';
import '../assets/styles/registro.css';
import '../assets/styles/styles.css';
import '../assets/styles/indexStyles.css';
import '../assets/styles/productCartStyles.css';
import logo from '../assets/images/header-logo-768px.png';
import logosmall from '../assets/images/header-logo-368px.png';
import logoAvatar from '../assets/images/logo.png';
import banner from '../assets/images/banners02.jpg';


const Header = () => {



    return (
        <Fragment>
            <div className="header">
                <div className="header-logo">
                    <a href="/">
                        <img
                            className="header-logo-368px"
                            src={logosmall}
                            alt="logo"
                        />
                        <img
                            className="header-logo-768px"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="header-busqueda">
                    <form action="/search" method="POST">
                        <input
                            className="header-search"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="  Busqueda"
                        />
                        <i className="fas fa-search"></i>
                    </form>
                </div>
                <div className="header-carrito">
                    <form action="/agregarCarrito" method="GET">
                        <a href="./agregarCarrito">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </form>
                </div>
                {/* <% if (locals.isLogged){ %> */}
                <div className="imagen-perfil-header">
                    <a href="/user">
                        {/* {" "} */}
                        <img
                            src={logoAvatar}
                            alt="Imagen de perfil miniatura"
                        />
                    </a>
                </div>
                {/* <% } %> */}
            </div>
            <div className="header-navegacion">
                <nav>
                    <i className="fas fa-bars"></i>
                    <div className="header-enlaces-burger">
                        <a href="/store">Tienda</a>
                        {/* <% if (locals.isLogged){ %> */}
                        {/* <% if (locals.userLogged.category_id =="2"){ %> */}
                        {/* <a href="/nuevoProducto">Nuevo Producto</a>
                        <a href="/user">Perfil</a>
                        <a href="/logout">Cerrar Sesión</a> */}
                        {/* <% } else{%> */}
                        <a href="/user">Perfil</a>
                        <a href="/logout">Cerrar Sesión</a>
                        {/* <% } %>
                <% } else { %>
                    <a href="/registro">Registro</a>
                    <a href="/login">Iniciar sesión</a>
                <% } %> */}
                    </div>
                </nav>
            </div>
            <div className="banner">
                <img
                    src={banner}
                    alt="banner"
                    title="Imagen Promociónal"
                />
            </div>
        </Fragment>
    );
};

export default Header;
