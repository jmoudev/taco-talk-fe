import React, { PureComponent } from 'react';

class MessageForm extends PureComponent {
  state = { message: '' };

  handleSend = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    // if (input.value) {
    //   socket.emit('chat apricot', input.value);
    //   input.value = '';
    // }
  };

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className='messageForm'>
        <h3>Submit Message</h3>
        <form id='form' action=''>
          <label onChange={this.handleChange} id='input' autoComplete='off'>
            <textarea></textarea>
          </label>
          <button onClick={this.handleSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
