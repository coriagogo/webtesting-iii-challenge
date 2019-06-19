// Test away
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import renderer from  'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders without issue', () => {
    render(<Dashboard />);
  });

  it('renders all children', () => {
    render(<Dashboard />);

    expect(document.querySelector('.controls')).toBeTruthy();
    expect(document.querySelector('.display')).toBeTruthy();
  });
});