/**
|--------------------------------------------------
| Setting up interfaces 
|--------------------------------------------------
*/
// NOTE Dispatch type(important)
export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
  random: Array<IEpisode>;
}
export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}
export interface IEpisode {
  id: number;
  name: string;
  airdate: string;
  image: { medium: string; original: string };
  number: string;
  season: number;
  summary: string;
}
export interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}
export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: any };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  fetchRandomEpisode: (
    state: IState,
    dispatch: any,
    episode: IEpisode
  ) => IAction;
  favourites: Array<IEpisode>;
  random: Array<IEpisode>;
}
