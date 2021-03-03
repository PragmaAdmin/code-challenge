import React from 'react';
import Header from '../components/Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
  it("Testing: Header is not null", () => {
    render(<Header />);
    expect(screen).not.toBeNull();
  });
  
  it('Testing: tittle contain Tech', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toHaveTextContent(/SensorTech/);
  });
});