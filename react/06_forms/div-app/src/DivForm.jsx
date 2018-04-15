import React, { Component } from 'react';

class DivForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.addDiv({
            h: event.target.h.value,
            w: event.target.w.value,
            bgc: event.target.bgc.value,
        });
        event.target.reset();
    }

    render() {
        return (
            <form className="mx-5 my-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="mb-0">Height</label>
                    <input type="number" className="form-control" id="h" name="h" placeholder="Enter height in pixels" required />
                </div>
                <div className="form-group">
                    <label className="mb-0">Width</label>
                    <input type="number" className="form-control" id="w" name="w" placeholder="Enter width in pixels" required />
                </div>
                <div className="form-group">
                    <label className="mb-0">Background Color</label>
                    <input type="text" className="form-control" id="bgc" name="bgc" placeholder="Enter color" />
                    <small id="bgcHelp" className="form-text text-muted">You can enter any named colors supported in HTML</small>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Add new div</button>
            </form>
        )
    }
}

export default DivForm;