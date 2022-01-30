import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider>
    <PersistGate loading="null" paersistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
