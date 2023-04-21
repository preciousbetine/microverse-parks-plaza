/**
 * @jest-environment jsdom
 */

import React from 'react';
import { MemoryRouter } from 'react-router';
import Activities from '../../routes/activities/Activities';
import renderWithProviders from '../utils';

describe('Activities page', () => {
  it('renders correctly', () => {
    const { page } = renderWithProviders(
      <MemoryRouter>
        <Activities />
      </MemoryRouter>,
    );
    expect(page).toMatchSnapshot();
  });
});
