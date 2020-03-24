import React from 'react';
import { Provider } from 'react-redux';

import '../scss/application.scss';
import store from '../redux/store';

import Routes from './components/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
