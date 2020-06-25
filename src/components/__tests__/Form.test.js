import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Form from '../Form';
import {configure} from 'enzyme';
import Adaoter from 'enzyme-adapter-react-16';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});
