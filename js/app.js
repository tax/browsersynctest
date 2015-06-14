import React from 'react';
import Message from './components/Message.react';

window.onload = function() {
  React.render(<Message name="world"/>, document.getElementById('starter-template'));
};
