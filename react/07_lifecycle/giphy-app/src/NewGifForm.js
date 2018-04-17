import React, { Component } from "react";

class NewGifForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  componentDidMount() {

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    getGifs(e){
      e.preventDefault()
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
        .then(r => r.json())
        .then(r => {
          this.props.handleSubmit(r)
        })
      this.setState({
        searchTerm: ''
      })
    }
    resetGifs(){
      this.props.clearGifs();
    }
    render(){
      return(
          <div>
            <div className="row">
              <form onSubmit={this.getGifs}>
                <input type="text" className="form-control" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange}/>
                <button type="submit">Search Giphy!</button>
              </form>
              <button className="col-sm-2 btn btn-danger" onClick={this.resetGifs}>Remove Images</button>
            </div>
          </div>
        )
    }
}



export default NewGifForm;
