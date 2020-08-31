import React, { Component } from 'react';
import Logo from '../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={Logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                    </span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ruta-de-prueba">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Pagina 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;