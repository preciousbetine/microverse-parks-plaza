import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Activities from './routes/activities/Activities';
import Parks from './routes/parks/Parks';
import './assets/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/parks/:activity_id" element={<Parks />} />
        <Route index element={<Activities />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
