import React, { Component } from 'react';
import './App.css';
import SearchForm from "./SearchForm.js";
import Gif from "./Gif.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(state) {
    var searchTerms = state.searchValue.split(" ").join("+");
      axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=LH574tPfHUgJ8ByS4J3wi1nbBSFDYwTs&limit=1`)
      .then( data => {
        var newURL = data.data.data[0].images.fixed_height.url;
        this.setState(prevState => ({
        gifs: [newURL, ...prevState.gifs]
      }))
    })
    return;
  }

  handleDelete() {
    this.setState({
      gifs: [],
    })
  }

  componentDidMount(){
    axios
      .get(`http://api.giphy.com/v1/gifs/random?api_key=LH574tPfHUgJ8ByS4J3wi1nbBSFDYwTs`)
      .then( data => {
        var newURL = data.data.data.images.fixed_height.url;
        this.setState(prevState => ({
        gifs: [newURL, ...prevState.gifs]
        })
      )
    }
    )
  }

  render() {

    const gifList = this.state.gifs.map((url, i) => {
        return (
        <div className="gif">
            <Gif url={url} key={i}/>
        </div>
        )
      });

    return (
      <div className="container">
        <h2> G I P H E R A T O R</h2>
        <SearchForm handleAdd={this.handleAdd} />
        <div>
          { gifList }
        </div>
        <button onClick={this.handleDelete}> - D E L E T E -  A L L - </button>
      </div>
    );
  }
}

export default App;
