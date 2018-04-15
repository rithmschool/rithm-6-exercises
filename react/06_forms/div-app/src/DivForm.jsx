import React, { Component } from 'react';

class DivForm extends Component {
    constructor(props) {
        super(props),
        this.state = {
            h: '',
            w: '',
            bgc: ''
        },
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addDiv({
            h: event.target.h.value,
            w: event.target.w.value,
            bgc: event.target.bgc.value,
        });
    }

    render() {
        return (
            <form className="mx-5 my-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="mb-0" for="h">Height</label>
                    <input type="number" className="form-control" id="h" name="h" placeholder="Enter height in pixels" />
                </div>
                <div className="form-group">
                    <label className="mb-0" for="w">Width</label>
                    <input type="number" className="form-control" id="w" name="w" placeholder="Enter width in pixels" />
                </div>
                <div className="form-group">
                    <label className="mb-0" for="bgc">Background Color</label>
                    <input type="text" className="form-control" id="bgc" name="bgc" placeholder="Enter color" />
                    <small id="bgcHelp" class="form-text text-muted">You can enter any named colors supported in HTML</small>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Add new div</button>
            </form>
        )
    }
}

export default DivForm;