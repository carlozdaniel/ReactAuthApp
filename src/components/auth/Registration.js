import React, { Component } from 'react';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationError: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("headle change", event);
    event.preventDefault();
  }

  handleSubmit(event) {
    cosole.log("headle change", event);

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <imput
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} required
          />
          <imput
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange} required
          />
          <imput
            type="password"
            name="password_confirmation"
            placeholder="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange} required
          />
          <button type="submit"> Register</button>
        </form>
      </div>
    );
  }
}