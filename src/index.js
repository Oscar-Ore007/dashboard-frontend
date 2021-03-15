import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store';
import App from './components/App';
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { PersistGate} from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing; border-box;
    transition: all 0.5s ease-in;
  }
  `;


ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <GlobalStyle />
    <App/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
  );

  $(document).bind("DOMNodeRemoved", function(e) {
    console.log("Removed: " + e.target.nodeName);
  });
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
