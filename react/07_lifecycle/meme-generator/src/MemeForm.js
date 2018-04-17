import React, { Component } from 'react';

class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addGif({ ...this.state });
    this.setState({ url: '' });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="MemeForm" onSubmit={this.handleSubmit}>
          <label htmlFor="url">Title: </label>
          <input
            id="url"
            name="url"
            onChange={this.handleChange}
            value={this.state.url}
          />
          <input type="submit" />
        </form>
        <button onClick={this.props.deleteAll}>Delete All</button>
      </div>
    );
  }
}

export default MemeForm;
