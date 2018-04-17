import React, { Component } from "react";
import axios from "axios";
import NewGiphyForm from "./NewGiphyForm";
import Gif from "./Gif";

export default class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newGif) {
    this.setState(prevState => ({
      gifs: [newGif, ...prevState.gifs]
    }));
  }

  render() {
    const gifs = this.state.gifs.map((g, i) => (
      <Gif src={g.src} searchTerm={g.searchTerm} key={i} />
    ));
    return (
      <section>
        <h3>Add new Gif!</h3>
        <NewGiphyForm handleAdd={this.handleAdd} />
        {gifs}
      </section>
    );
  }
}
