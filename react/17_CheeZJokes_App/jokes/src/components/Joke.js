import React, { Component } from "react";

// const Jokes = props => {
//   JokeItems = props.jokes.map(jokes => {
//     return (joke = { jokes });
//   });

class Joke extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("Joke constructor");
  //   // this.state = {
  //   //   jokes: []
  //   // };
  // }

  render() {
    console.log("Joke render");
    const { joke, id, votes } = this.props;
    return (
      <div>
        <div className="counter">
          <button onClick={() => this.props.handleUpvote(id)}>+</button>
          <h2 className="count">{votes}</h2>
          <button onClick={() => this.props.handleDownvote(id)}>-</button>
        </div>
        <p>{joke.text}</p>
      </div>
    );
  }
}
export default Joke;
