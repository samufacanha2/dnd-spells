import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('App', () => {
  it('should work as expected', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
