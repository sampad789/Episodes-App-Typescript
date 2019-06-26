import React from "react";
import { Store } from "./Store";
import { toggleFavAction, fetchRandomEpisode } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function Favourites(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    fetchRandomEpisode,
    favourites: state.favourites,
    random: state.random
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
