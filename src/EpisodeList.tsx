import React from "react";
import { IEpisode } from "./interfaces";
export default function EpisodeList(props: any): Array<JSX.Element[]> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          className="image"
          src={episode.image.original}
          alt={`Brooklyn Nine Nine ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>
            {" "}
            S{episode.season}Ep
            {episode.number}
          </div>
          <button
            className="button"
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfavourite"
              : "Favourite"}
          </button>
          <p>Aired on: {episode.airdate} </p>

          {episode.summary.replace(/(<([^>]+)>)/gi, "")}
        </section>
      </section>
    );
  });
}
