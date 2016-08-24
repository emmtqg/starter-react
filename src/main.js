console.log('Dia duit an Domhain!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});