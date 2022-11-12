import React from 'react';
import './Header.css';
// import background from "../../img/11.jpg"


const Header = () => {
  return (
    <div className='header' id='Home'>

        <div className="container">

            <div className="row">

                <div className="col-md-6 col-lg-6 mt-5">
                    <h1> Good food choices <br/>are good <br/>investments.</h1>
                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button type="button" className="btn btn-danger bb"> Order Now <i class='bx bx-shopping-bag'/> </button>
                    <button type="button" className="btn btn-light shadow  bg-white rounded">Learn More <i className='bx bx-chevron-right'></i></button>
                </div>

                <div className="col-md-6 col-lg-6">
                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header
