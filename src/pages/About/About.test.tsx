import { render, screen } from '@testing-library/react';
import About from './About';

describe('App', () => {
  it('should work as expected', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
