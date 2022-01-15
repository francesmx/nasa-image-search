// Custom render as recommended here:
// https://redux.js.org/usage/writing-tests#connected-components
// Makes use of redux toolkit (RTK) helper function to mock store, i.e. setupApiStore

import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { nasaApiSlice } from '../../api/NasaApiSlice';
import { setupApiStore } from './mock-rtk-store';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const storeRef = setupApiStore(nasaApiSlice);
    return <Provider store={storeRef.store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
