import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
//import reportWebVitals from "./reportWebVitals.js";
import { createBrowserHistory } from "history";
import * as ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.css";
import ScrollToTop from "./Components/Shared/ScrollToTop.js";

ReactGA.initialize("UA-368489-1");
ReactGA.send("pageview");

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.send({ hitType: "pageview", page: location.pathname }); // Record a pageview for the given page
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
