import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    ratings: "",
    duration: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = () => {
    let { name, ratings, duration } = this.state;
    if (name && ratings && duration) {
      this.props.onFormSubmit(this.state);
    }
  };

  render() {
    let { name, ratings, duration } = this.state;
    return (
      <div>
        <label>Movie Name</label>
        <input
          type="text"
          id="name-input"
          name="name"
          value={name}
          onChange={this.handleOnChange}
        />
        <label>Ratings</label>
        <input
          type="text"
          id="ratings-input"
          name="ratings"
          value={ratings}
          onChange={this.handleOnChange}
        />
        <label>Duration</label>
        <input
          type="text"
          id="duration-input"
          name="duration"
          onChange={this.handleOnChange}
          value={duration}
        />
        <div className="action">
          <button id="submit-button" onClick={this.handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
