import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import activitiesReducer from '../redux/slices/activitySlice';
import parksReducer from '../redux/slices/parkSlice';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        activities: activitiesReducer,
        parks: parksReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
