import React from 'react';
import './Nav.css';
import loogo from '../../img/logo.png';



const Navbar = () => {


return ( 
    <div>
        <nav className=" navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <a className="navbar-brand" href="!#">
            <img src={loogo} alt= "logo" className='loo'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#About">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Explore">Explore Foods</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Review">Reviews</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#faq">FAQ</a>
                    </li>
                    <li>
                    <button className="btn btn-outline-success" type="submit">
                        <i className='bx bx-phone-call'/> 23458796
                    </button> 
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
