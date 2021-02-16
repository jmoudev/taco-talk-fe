import React, { PureComponent } from 'react';

class MessageForm extends PureComponent {
  handleSend = (event) => {
    event.preventDefault();
    // if (input.value) {
    //   socket.emit('chat apricot', input.value);
    //   input.value = '';
    // }
  };

  render() {
    return (
      <div className='messageForm'>
        <h3>Submit Message</h3>
        <form id='form' action=''>
          <label id='input' autoComplete='off'>
            <textarea></textarea>
          </label>
          <button onClick={this.handleSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
