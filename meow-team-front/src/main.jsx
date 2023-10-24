import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router/Router.jsx'
import { Provider } from "react-redux";
import store from "./Store/Store.js"
// import { persistor } from "./Store/Store.js"
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router/>
  </Provider>
)