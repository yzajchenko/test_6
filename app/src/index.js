import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./comonComponents/MainLayout";

import Routes from "./routes/Roures";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
