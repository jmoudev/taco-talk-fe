import './App.css';
import Title from './components/Title';
import LoginPage from './containers/LoginPage';
import ChatPage from './containers/ChatPage';
import ErrorPage from './containers/ErrorPage';
import { Router } from '@reach/router';

import React, { Component } from 'react';

export default class App extends Component {
  state = { username: 'therealtacodreamteam' };

  loginAsUser = username => {
    this.setState({ username }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Router>
          <LoginPage path="/" loginFunc={this.loginAsUser} />
          <ChatPage path="/main" username={this.state.username} />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}
