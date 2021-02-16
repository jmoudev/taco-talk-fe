import React, { PureComponent } from 'react';

class MessageForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='messageForm'>
        <h3>Submit Message</h3>
        <form id='form' action=''>
          <input id='input' autoComplete='off' />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
