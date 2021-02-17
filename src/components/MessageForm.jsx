import React, { PureComponent } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

class MessageForm extends PureComponent {
  state = {
    data: {
      username: '',
      icon: '',
      text: ''
    }
  };

  handleSend = (event) => {
    event.preventDefault();
    console.log(this.state.data.text);
    if (this.state.data.text) {
      socket.emit('chat', {
        username: 'joe',
        icon: 'url',
        message: this.state.data.text
      });
      this.setState({ data: { text: '' } });
    }
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ data: { text: event.target.value } });
  };

  render() {
    return (
      <div className='messageForm'>
        <h3>Submit Message</h3>
        <form id='form' action='' onSubmit={this.handleSend}>
          <label id='input' autoComplete='off'>
            <textarea
              value={this.state.data.text}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
