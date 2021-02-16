import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="">
          <label htmlFor="">
            Username:
            <textarea />
          </label>
          <label htmlFor="">
            Image:
            <select>
              <option value="1">Hello</option>
            </select>
          </label>
          <button
            type="submit"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            Eat it mostly
          </button>
        </form>
      </div>
    );
  }
}
