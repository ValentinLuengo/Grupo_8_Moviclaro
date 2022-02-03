import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import footerLogo from '../assets/images/footer-logo.png';
import '../assets/styles/registro.css';
import '../assets/styles/productCartStyles.css';
import '../assets/styles/indexStyles.css';
import '../assets/styles/normalize.css';
import '../assets/styles/styles.css';


const Footer = () => {
    return ( 
        <Fragment>
        <footer>
                <div className="min-769">
                <h4 className="cont">CONTACTO</h4>
                <div className="contacto con-ico">
                    <Link to="*"><i className="far fa-envelope"> </i>  moviclaro@hotmail.com </Link>
                    <p className="fooTel"><i className="fab fa-whatsapp"></i> +54 9 11 2626-3232</p>
                </div>
                <div className="min-369">
                    <div className="comprar min-369">
                        <p>¿Como comprar?</p>
                        <div className="redes cont-ico">
                            <Link to="https://www.facebook.com/" className="ico-redes"><i className="fab fa-facebook-square"></i></Link>
                            <Link to="https://www.twitter.com/" className="ico-redes"><i className="fab fa-twitter"></i></Link>
                            <Link to="https://www.instagram.com/" className="ico-redes"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="footer-imagen min-369">
                        <Link to="/">
                            <img src={footerLogo} alt="Logo moviclaro"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="derechos">
                <p>Todos los derechos reservados <span>Grupo-8 ©</span>
                </p>
            </div>   
        </footer>       
        </Fragment>
     );
}
 
export default Footer;