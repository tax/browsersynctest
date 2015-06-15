import React from 'react';
import Message from './components/Message.react';

function hello(name='paul') {
  console.log(name);
}

class Person {
  constructor(name) {
    this.name = name;
  }

  doWork(callback) {
    setTimeout(() => callback(this.name), 15);
  }
}

window.onload = function() {
  var person = new Person('Scott2');
  React.render(<Message name="world"/>, document.getElementById('starter-template'));
  hello();
  hello('lola');
  [1, 2, 3].map(x => console.log(x));
  person.doWork(function(result) {
    console.log(result);
  });
};
