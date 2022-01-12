import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import giphyApi from "./APIs/gifyApi";
import thunk from "redux-thunk";

import { App } from "./App";
import rootReducer from "./reducers/reducer";

import "./App.css";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

console.log(store.getState());

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
