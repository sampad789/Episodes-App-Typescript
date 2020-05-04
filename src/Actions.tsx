import { IAction, IEpisode, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=brooklyn-nine-nine&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const checkEpisodeInFav = state.favourites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };
  if (checkEpisodeInFav) {
    const removedEpisodeFromFav = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: removedEpisodeFromFav,
    };
  }
  return dispatch(dispatchObj);
};

export const fetchRandomEpisode = (state: IState, dispatch: any): IAction => {
  const randomize = state.episodes;
  const randomEpisode = randomize[Math.floor(Math.random() * randomize.length)];
  console.log(randomEpisode);
  return dispatch({
    type: "RANDOM_EPISODE",
    payload: randomEpisode,
  });
};
