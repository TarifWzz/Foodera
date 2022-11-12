import React from 'react';
import './SecMeal.css';
import picpride from '../../img/22.png'

const SecMeal = () => {
  return (
    <div className='pride' id='About'>
            <div class="container">
                <div class="row">
                
                    <div class="col-md-6">
                        <img src={picpride} alt="pic" className='img-fluid rounded-3'/>
                    </div>
                    
                    <div class="col-md-6">
                       <h1>
                         We pride ourselves on making real food from the best ingredients.
                       </h1>
                       <p className='text-start'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                       <button className='btn  btb'>
                        Learn More 
                       </button>
                    </div>

                </div>
            </div>
      
    </div>
  )
}

export default SecMeal
