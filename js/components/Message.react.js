import React from 'react';

class Message extends React.Component {
  render() {
    return <h2>Hello {this.props.name}</h2>;
  }
};

module.exports = Message;
