import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FC from './FirstComponent';
import SC from './SecondComponent';
import NC from './NamedComponent';
import Tweet from './Tweet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>
          PART 1
        </h1>
        <FC/>
        <SC/>
        <NC name="Jim"/>
        <hr/>
        <h1>
          PART 2
        </h1>
        <div className="tweets">
          <Tweet username="sir-loves-a-lot" date="3/20" name="Don John" message="This is my first tweet, it is so exciting"/>
          <Tweet username="kicker" date="3/21" name="Mary Ann" message="I just got on Tweeter, but I already hate this Don John guy!"/>
          <Tweet username="blond-hurricane" date="3/22" name="Lee Onora" message="Common @kicker, chill! He's just a troll from facebook"/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
