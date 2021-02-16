import React, { Component } from 'react';
import Messages from './Messages';
import OnlineUsers from './OnlineUsers';
import MessageForm from './MessageForm';

export default class ChatPage extends Component {
  state = {
    user: 'nachofool',
    messages: [
      { user: 'tacoman2000', msg: 'I love tacos' },
      { user: 'burritobae', msg: 'I also enjoy tacos' }
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
