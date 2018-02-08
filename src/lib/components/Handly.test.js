import React from 'react';
import ReactDOM from 'react-dom';
import Handly from './Handly';

it('Handly renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Handly string='test'/>, div);
});