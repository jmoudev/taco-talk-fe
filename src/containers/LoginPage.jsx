import React, { Component } from 'react';

export default class LoginPage extends Component {
  state = {
    text: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
    this.props.loginFunc(this.state.text);
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="">
          <label htmlFor="">
            Username:
            <input type="text" onChange={this.handleChange} />
          </label>
          <label htmlFor="">
            Image:
            <select>
              <option value="1">Hello</option>
            </select>
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Eat it mostly
          </button>
        </form>
      </div>
    );
  }
}
