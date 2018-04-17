import React, { Component } from "react";
import axios from "axios";
import "./giphy-list.css";
import GiphyImg from "./giphy-img";
import SearchForm from "./search-form";

let API_URL = "http://api.giphy.com/v1/gifs";
let API_KEY = "api_key=dc6zaTOxFJmzC&limit=1";

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = { giphs: [], numCalled: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/random?${API_KEY}`, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        let randomGiph = response.data.data.images.downsized.url;
        this.setState(prevState => ({
          giphs: [{ src: randomGiph, search: "random" }]
        }));
      });
  }

  handleAdd(search) {
    axios
      .get(`${API_URL}/search?q=${search}&${API_KEY}`, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        let newGiph = response.data.data[0].images.downsized.url;
        if (this.state.numCalled === 0) {
          this.handleRemoveAll();
        }
        this.setState(prevState => ({
          giphs: [{ src: newGiph, search: search }, ...prevState.giphs],
          numCalled: prevState.numCalled + 1
        }));
      });
  }

  handleRemoveAll() {
    this.setState({ giphs: [] });
  }

  render() {
    let giphs = this.state.giphs.map((giph, idx) => {
      return <GiphyImg key={idx} src={giph.src} search={giph.search} />;
    });

    return (
      <div className="Giphy-background">
        {giphs}
        <SearchForm handleAdd={this.handleAdd} />
        <br />
        <button onClick={this.handleRemoveAll}>Remove All Images</button>
        <br />
        <br />
      </div>
    );
  }
}

export default Giphy;
