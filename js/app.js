import React from 'react';
import Message from './components/Message';

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
  let person = new Person('Scott33');
  React.render(<Message name="world "/>, document.getElementById('starter-template'));
  hello();
  hello('lola');
  [1, 2, 3].map(x => console.log(x));
  person.doWork(function(result) {
    console.log(result);
  });
};
