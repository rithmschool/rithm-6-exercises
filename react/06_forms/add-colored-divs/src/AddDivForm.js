import React, { Component } from 'react';

class AddDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    //pass whole current state object of AddDivForm as argument to addDiv method
    this.props.addDiv({ ...this.state });
    this.setState({ width: '', height: '', backgroundColor: '' });
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div style={{ display: 'block' }}>
          <label htmlFor="width">Width</label>
          <input
            name="width"
            onChange={this.onChange}
            value={this.state.width}
          />
        </div>
        <div style={{ display: 'block' }}>
          <label htmlFor="height">Height</label>
          <input
            name="height"
            onChange={this.onChange}
            value={this.state.height}
          />
        </div>
        <div style={{ display: 'block' }}>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            name="backgroundColor"
            onChange={this.onChange}
            value={this.state.backgroundColor}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddDivForm;
