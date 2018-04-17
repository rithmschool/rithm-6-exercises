import React, { Component } from "react";
import axios from "axios";
import NewGiphyForm from "./NewGiphyForm";
import Gif from "./Gif";
import { getRandom } from "./helpers";

export default class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.setState({ gifs: [] });
  }

  async handleAdd(searchTerm) {
    const matchingGifs = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=7ZEFWow7Ud3maNI79i6LS2XK3r69X6ab&q=${searchTerm}`
    );
    const url = getRandom(matchingGifs.data.data).images.fixed_height.url;
    const newGif = { searchTerm, url };
    this.setState(prevState => ({
      gifs: [newGif, ...prevState.gifs]
    }));
  }

  async componentDidMount() {
    const randomGif = await axios.get(
      "https://api.giphy.com/v1/gifs/random?api_key=7ZEFWow7Ud3maNI79i6LS2XK3r69X6ab"
    );
    const url = randomGif.data.data.images.fixed_height.url;
    const newGif = { searchTerm: "random", url };
    this.setState(prevState => ({ gifs: [newGif, ...prevState.gifs] }));
  }

  render() {
    const gifs = this.state.gifs.map((g, i) => (
      <Gif url={g.url} searchTerm={g.searchTerm} key={i} />
    ));
    return (
      <section>
        <h3>Add new Gif!</h3>
        <NewGiphyForm handleAdd={this.handleAdd} />
        <button onClick={this.handleDelete}>Delete all gifs!</button>
        {gifs}
      </section>
    );
  }
}
