import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent.js";
import SecondComponent from "./SecondComponent.js";
import ThirdComponent from "./ThirdComponent.js";
import Tweet from "./Tweet.js";
import Person from "./Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <div>
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent name="Miranda" />
        </div> */}
        <div>
          <Tweet
            username="PaulyG"
            name="Paula"
            date="4/20/18"
            message="React is okay... I guess"
          />
          <Tweet
            username="charlemagne"
            name="Charmaine"
            date="4/01/18"
            message="React is almost as cool as Rithm"
          />
          <Tweet
            username="mirandaHow"
            name="Miranda"
            date="4/11/18"
            message="React is hella cool"
          />
        </div>

        <Person
          name="Paula"
          age="26"
          hobbies={["PokemonGo", "Cuddling Pigs", "Backgammon"]}
        />
        <Person
          name="Alex"
          age="21"
          hobbies={["Crushing Babies", "React", "Lumbering"]}
        />
        <Person
          name="Charmaine"
          age="29"
          hobbies={["Sippin Rose", "Instagramming", "Beating up old people"]}
        />
      </div>
    );
  }
}

export default App;
