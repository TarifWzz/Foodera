import React, { Component } from 'react';
import Navbar from './Component/Nav/Navbar';
import Header from './Component/Header/Header';
import SecNum from './Component/SecNumber/SecNum';
import SecMeal from './Component/SecMeal/SecMeal';
import SecPossible from './Component/SecPossible/SecPossible';
import SecCack from './Component/SecCack/SecCack';
import Order from './Component/Orderr/Order';
import Frequently from './Component/Frequently/Frequently';
import Daily from './Component/Daily/Daily';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';


class App extends Component {
  
  render(){

    return(
      <div>
        <Navbar/>
        <Header/>
        <SecNum/>
        <SecMeal/>
        <SecPossible/>
        <SecCack/>
        <Order/>
        <Frequently/>
        <Daily/>
        <Contact/>
        <Footer/>
      </div>
    )
  }

}
export default App;
