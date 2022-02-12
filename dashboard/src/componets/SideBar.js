import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import image from '../assets/images/header-logo-368px.png';
import Products from './Products';
import Table from './Table';
import Content from './Content';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import TableUsers from './TableUsers';
import Error404 from './Error404'


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Moviclaro</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastProductInDb">
                        <i className="fas fa-fw fa-mobile-alt"></i>
                        <span>Ultimo producto</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/Products">
                        <i className="fas fa-fw far fa-copyright"></i>
                        <span>Marcas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/table">
                        <i className="fas fa-fw fa-mobile-alt"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastUserInDb">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Ultimo usuario</span></Link>
                </li>
                
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/TableUsers">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Usuarios</span></Link>
                </li>
                
                
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3001">
                    <div className="sidebar-brand-icon">
                        <img className="w-75" src={image} alt="Moviclaro"/>
                    </div>
                </a>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route exact path="/" element={ <Content />} />
                <Route exact path="/Table" element={ <Table />} />
                <Route exact path="/Products" element={ <Products />} />
                <Route exact path="/LastProductInDb" element={ <LastProductInDb />} />
                 {/* <Route exact path="./table" element={Table} /> */}
                 <Route exact path="/LastUserInDb" element={ <LastUserInDb />} />
                 <Route exact path="/TableUsers" element={ <TableUsers />} />
                <Route exact path='*' element={ <Error404 /> } /> 

            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;