import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import Homepage from "./HomePage";
import Favourites from "./Favourites";
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Homepage />} path="/" />
        <RouterPage pageComponent={<Favourites />} path="/favourites" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
