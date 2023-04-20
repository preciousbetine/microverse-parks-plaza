/**
 * @jest-environment jsdom
 */

import React from 'react';
import { MemoryRouter } from 'react-router';
import Parks from '../../routes/parks/Parks';
import renderWithProviders from '../utils';

describe('Parks page', () => {
  it('renders correctly', () => {
    const { page } = renderWithProviders(
      <MemoryRouter>
        <Parks />
      </MemoryRouter>,
    );
    expect(page).toMatchSnapshot();
  });
});
