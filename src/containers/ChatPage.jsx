import React, { Component } from 'react';
import Messages from '../components/Messages';
import OnlineUsers from '../components/OnlineUsers';
import MessageForm from '../components/MessageForm';

export default class ChatPage extends Component {
  state = {
    username: 'nachofool',
    messages: [
      { username: 'tacoman2000', msg: 'I love tacos' },
      { username: 'burritobae', msg: 'I also enjoy tacos' }
    ]
  };

  render() {
    return (
      <div>
        <h2>Chat Page</h2>
        <Messages messages={this.state.messages} />
        <MessageForm />
        <OnlineUsers />
      </div>
    );
  }
}
