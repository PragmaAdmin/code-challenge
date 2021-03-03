import React from 'react';
import Home from '../components/Home';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('Testing: row charged in the DOM', () => {
    render(<Home />);
    expect(screen.getByRole('row')).not.toBeEmptyDOMElement();
  });
});