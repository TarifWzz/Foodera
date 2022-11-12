import React from 'react';
import './Order.css'
import blog1 from '../../img/55.jpg';
import blog2 from '../../img/66.jpg';
import blog3 from '../../img/77.jpg';

const Order = () => {
  
    const MyData =[
        {img : blog1, title : 'Rainbow Vegetable Sandwich' , time :'Time : 15 - 20 Minutes | Serves:1', price: '$10.50' },
        {img : blog2 , title : 'Vegetarian Burger' , time :'Time: 30 - 45 Minutes | Serves: 1', price: '$9.20' },
        {img : blog3, title : 'Raspberry Stuffed French Toast' , time :'Time: 10 - 15 Minutes | Serves: 1', price: '$12.50' },
       
    ];

    const infoblog = MyData.map((el)=>{
        return(
            <div className="col-md-4">
                <div className='mybox'>
                    <img src={el.img} alt="pic" className='img-fluid rounded'/>
                    <h5>{el.title} </h5>
                    <span>{el.time}</span>
                    <h4>{el.price}</h4>
                </div>
                <hr></hr>
                <button className='btn bbnm'>Order Now</button>
            </div>
        )
    })

  return (
    <div className='myorder' id='Explore'>
        
            <div class="container">
                <div className="row">
                    
                    <div className="col-md-12 col-lg-12">
                       <h2>Explore Our Foods</h2>
                       <p className='textorder'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away,
                             behind the word mountains, far from the countries Vokalia and <br/>Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove.
                       </p>
                    </div>
                
                </div>

                <div className='row'>
                    {infoblog}
                </div>
            </div>

    </div>
  )
}
 
export default Order
