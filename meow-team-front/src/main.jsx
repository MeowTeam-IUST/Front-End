import React from 'react'
import ReactDOM from 'react-dom';
import {AppRouter} from './Router/Router.jsx'
import { Provider } from "react-redux";
import store from "./Store/Store.js"
import { App } from './App.jsx';
// import { persistor } from "./Store/Store.js"
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter/>
    {/* <App/> */}
  </Provider>
)