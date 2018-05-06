import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        "https://media1.tenor.com/images/584bb2b120144fb033725e459ece68a1/tenor.gif?itemid=7682653"
      ]
    };
  }

  handleAdd = url => {
    this.setState(prevState => ({ gifs: [...prevState.gifs, url] }));
  };

  removeAll(event) {
    event.preventDefault();
    this.setState(prevState => ({ gifs: [] }));
  }

  componentDidMount() {
    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
      .then(res => {
        let url = res.data.data.images.original.url;
        this.setState(prevState => ({ gifs: [url] }));
      });
  }
  render() {
    let gifs = this.state.gifs.map((gif, i) => {
      return <img src={gif} />;
    });
    return (
      <div className="App">
        <h1>Giphy Party</h1>
        <SearchForm handleAdd={this.handleAdd} supYang="hey" />
        <button>Remove Image</button>
        <br />
        {gifs}
      </div>
    );
  }
}

export default App;
