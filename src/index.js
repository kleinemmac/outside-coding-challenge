import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
