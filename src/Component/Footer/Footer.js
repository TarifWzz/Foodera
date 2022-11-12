import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png'

const Footer = () => {
  return (
    <div className='Footer pt-5 pb-5 text-white-50 text-center text-md-start position-relative'>
        <div className='container'>
            <div class="row">

                <div class="col-md-6 col-lg-4">
                   <div className='info'>
                      <img src={logo} alt='logo' className='img-fluid mb-4'/>
                      <p className='mb-5   text-sm-center text-md-start'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
                      </p>
                      <div className='copyright'>
                          Created by <span className='tt'>Tarif Waez</span>
                        <div>&copy; 2022 <span>Foodera. All rights reserved.</span></div> 
                      </div>
                   </div>                
                </div>

                <div class="col-md-6 col-lg-2">
                   <div className='links'>
                       <h5 className='text-light mt-5 cvc'> Links</h5>
                       <ul className='list-unstyled lh-lg '>
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Explore Foods</li>
                           <li>Reviews</li>
                           <li>FQA</li>
                       </ul>
                   </div>
                </div>

                <div class="col-md-6 col-lg-2">
                   <div className='links'>
                       <h5 className='text-light mt-5 '>About Us</h5>
                       <ul className='list-unstyled lh-lg '>
                           <li>Sign in</li>
                           <li>Register</li>
                           <li>About Us </li>
                           <li>Blogs</li>
                           <li>Contact Us</li>
                       </ul>
                   </div>
                </div>

                <div class="col-md-6 col-lg-4">
                   <div className='Social mt-5 '>
                     <h5 className='text-light'> Social</h5>

                    <ul className='d-flex justify-content-center align-items-center mt-5 list-unstyled gap-2 '>

                        <li> 
                            <a href="!=">
                                <i className='bx bxl-facebook bx-sm'  style={{color:'#f5eeee'}}/>
                            </a>
                        </li>

                        <li>
                                <a href="!="> 
                                 <i className='bx bxl-twitter bx-sm'   style={{color:'#f5eeee'}}/>
                                </a>
                        </li>

                        <li>
                            <a href="!=">  
                                    <i className='bx bxl-youtube bx-sm'   style={{color:'#f5eeee'}}/> 
                            </a>
                        </li>
                            
                        <li>
                                <a href="!="> 
                                  <i className='bx bxl-dribbble bx-sm'  style={{color:'#f5eeee'}}/>
                                </a>
                        </li>
                                
                        <li>
                              <a href="!="> <i className='bx bxl-linkedin bx-sm'  style={{color:'#f5eeee'}}/></a>
                        </li>

                        <li>
                             <a href="!="> <i className='bx bxl-instagram bx-sm' style={{color:'#f5eeee'}}/> </a>
                        </li>

                        <li>
                             <a href="!="> <i className='bx bxl-telegram bx-sm' style={{color:'#f5eeee'}}/> </a>
                        </li>
                        
                    </ul>
                  
                   </div> 
                   
                </div>

             

            </div>
             
        </div>
    </div>
  )
}

export default Footer
