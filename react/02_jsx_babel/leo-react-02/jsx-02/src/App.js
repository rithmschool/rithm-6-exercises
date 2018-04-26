import React, { Component } from 'react';
import './App.css';
import Tweet from './components/Tweet';
import Person from './components/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Displaying components!</h3>
        <Tweet
          user="Leo"
          message="You can litterally shoot at me and I'll be happy tomorrow"
          date="2018"
        />
        <Tweet user="Ellie" message="That would be a schanda!" date="2018" />

        <Tweet user="Matt" message="Math is hard..." date="2018" />

        <br />
        <br />
        <Person name="Leo" age={21} hobbies={['Cars', 'Cars', 'Coding']} />
        <br />
        <Person
          name="Schwarzeneggar"
          age={65}
          hobbies={['Making movies', 'Politics', 'Body Building']}
        />
        <br />
        <Person
          name="Brutus"
          age={28}
          hobbies={[
            'backstabbing friends',
            'overthrowing empires',
            'being an asshole'
          ]}
        />
      </div>
    );
  }
}

export default App;
