import React, { PureComponent } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

class MessageForm extends PureComponent {
  state = {
    message: '',
    data: {
      username: '',
      icon: '',
      text: ''
    }
  };

  handleSend = event => {
    event.preventDefault();
    console.log(event.target.value);
    if (this.state.data.text) {
      socket.emit('chat', {
        username: 'joe',
        icon: 'url',
        message: 'tacos are great'
      });
      this.setState({ data: { text: '' } });
    }
  };

  handleChange = event => {
    this.setState({ data: { text: event.target.value } });
  };

  render() {
    return (
      <div className="messageForm">
        <h3>Submit Message</h3>
        <form id="form" action="">
          <label onChange={this.handleChange} id="input" autoComplete="off">
            <textarea></textarea>
          </label>
          <button onClick={this.handleSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
