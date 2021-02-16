import React, { PureComponent } from 'react';

class Messages extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='messagesWrapper'>
        <h3>Messages</h3>
        <ul id='messages'></ul>
      </div>
    );
  }
}

export default Messages;
