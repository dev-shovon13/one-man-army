import React from 'react';
import logo from '../../images/logo.png'
import Budget from '../Budget/Budget';
import './Header.css'

const Header = (props) => {
    return (
        // header section 
        <div className="header-section">
            {/* navbar  */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <img src={logo} alt="logo" className="bg-secondary rounded p-1" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/menu">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/equipments">Equipments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.searchProduct} />
                            <button className="btn btn-outline-success"
                                type="submit"
                            >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* loading total budget section as Component */}
            <Budget />
        </div>
    );
};

export default Header;