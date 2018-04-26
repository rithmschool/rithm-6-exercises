import React, { Component } from "react";
import SearchBarFrom from "./SearchBarForm";
import Loading from "./Loading";
import Image from "./Image";
import axios from "axios";
import { API_URL } from "./API_URL";

class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: "",
      loading: false
    };
  }

  // `${API_URL}/search?q=cat&api_key=dc6zaTOxFJmzC&limit=5`

  componentDidMount() {
    axios
      .get(`http://api.giphy.com/v1/gifs/random?q=""&api_key=dc6zaTOxFJmzC`, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        // let gifys = response.data.data.map(gif => ({
        //   url: gif.images.downsized.url
        // }));
        console.log(response);

        let gifys = response.data.data.images.downsized.url;
        console.log(gifys);
        this.setState({ images: gifys });
      });
  }
  render() {
    // let gifys = this.state.images.map((gif, idx) => {
    //   return <Image key={idx} src={gif.url} />;
    // });
    return (
      <div>
        <img src={this.state.images} alt="" />
      </div>
    );
  }
}

export default GiphyList;
