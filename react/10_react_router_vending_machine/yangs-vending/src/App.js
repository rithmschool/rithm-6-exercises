import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

const Home = () => (
  <div>
      <br/><br/>
      <h1> Hungry? You're in the right place! </h1> 
      <img class="vending" src="https://i.pinimg.com/736x/73/ac/44/73ac44e2337e203c65f3ee0d6c6f227d--low-poly-facility.jpg" alt="vending"/>
      <br/><br/>
      <Link to="/steak"> Steak </Link>
      <br/><br/>
      <Link to="/icecream"> Ice Cream </Link>
      <br/><br/>
      <Link to="/frenchfries"> French Fries </Link>
  </div>
)
const Steak = () => (
  <div>
      <img class="steak" src="https://i.pinimg.com/736x/6c/b5/63/6cb563f2ad47356bbfc88e91225d118c--prime-rib-roast-recipe-garlic-herb-butter.jpg" alt="steak"/>
      <p> Eat some steak son! </p> 
      <br/>
      <Link to="/"> Home </Link>
  </div>
)
const IceCream = () => (
  <div>
      <img class="ice-cream" src="http://greatinspire.com/wp-content/uploads/2012/10/Dessert-by-Sergiu-Ovidiu.jpg" alt="icecream"/>
      <p> Eat some ice cream son! </p> 
      <br/>
      <Link to="/"> Home </Link>
  </div>
)
const FrenchFries = () => (
  <div>
      <img class="french-fries" src="https://wallpaperscraft.com/image/potatoes_french_fries_fried_71624_1920x1080.jpg" alt="fries"/>
      <p> Eat some french fries son! </p> 
      <br/>
      <Link to="/"> Home </Link>
  </div>
)


class App extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Home}/>
          <Route path="/steak" component={Steak}/>
          <Route path="/icecream" component={IceCream}/>
          <Route path="/frenchfries" component={FrenchFries}/>
      </div>
    );
  }
}

export default App;
