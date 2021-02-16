import React, { Component } from 'react';
import Messages from './Messages';
import OnlineUsers from './OnlineUsers';
import MessageForm from './MessageForm';

export default class ChatPage extends Component {
  render() {
    return (
      <div>
        <h2>Chat Page</h2>
        <Messages />
        <MessageForm />
        <OnlineUsers />
      </div>
    );
  }
}
