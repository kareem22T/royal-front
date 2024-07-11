import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TranslationProvider } from './Component/TranslataionContext'; // Adjust the path as per your project structure

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { setupInterceptors } from './API';

setupInterceptors(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <TranslationProvider>
            <App />
          </TranslationProvider>
        </PersistGate>
      </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
