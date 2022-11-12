import React from 'react';
import './SecPossible.css';
import poss from '../../img/33.png'

const SecPossible = () => {
  return (
    <div className='possible'>
        <div class="container">
            <div class="row">

                <div class="col-md-5">
                    <h2>We make everything by <br/> hand with the best possible ingredients.</h2>
                    <p className='mytext text-start'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam et purus a odio finibus bibendum in sit amet leo. 
                        Mauris feugiat erat tellus.Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p className='mycheck text-start'> 
                        <i class='bx bx-check' style={{ color:'#c94949'}}  ></i> Etiam sed dolor ac diam volutpat.<br/>
                        <i class='bx bx-check' style={{ color:'#c94949'}}  ></i>   Erat volutpat aliquet imperdiet.<br/>
                        <i class='bx bx-check' style={{ color:'#c94949'}}  ></i>   purus a odio finibus bibendum.<br/>
                    </p>
                    <button className='btn bbta'> Learn More</button>
                    
                </div>

                <div class="col-md-7">
                    <img src={poss} alt='pic' className='img-fluid'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SecPossible
