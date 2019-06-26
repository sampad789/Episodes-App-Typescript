import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { fetchRandomEpisode } from "./Actions";

export default function App(props: any): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const { episodes } = props;

  console.log(state);
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Brooklyn Nein-Nein </h1>
          <p>Select Your Favourite Episode </p>
          <button
            type="button"
            className="button"
            onClick={() => fetchRandomEpisode(state, dispatch, episodes)}
          >
            Watch a random Episode
          </button>
        </div>
        <div>
          <Link className="header-links" to="/">
            Home
          </Link>
          <Link className="header-links" to="/favourites">
            {" "}
            Favourite(s):{state.favourites.length}
          </Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
