import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Form from '../Form';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});
