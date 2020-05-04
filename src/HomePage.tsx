import React, { useEffect } from "react";
import Pagination from "./Pagination";

import { IEpisodeProps } from "./interfaces";
import {
  fetchDataAction,
  toggleFavAction,
  fetchRandomEpisode,
} from "./Actions";
import { Store } from "./Store";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));
export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [episodePerPage] = React.useState(12);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  // Get current posts
  const indexOfLastPost = currentPage * episodePerPage;
  const indexOfFirstPost = indexOfLastPost - episodePerPage;
  const currentEpisodes = state.episodes.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const props: IEpisodeProps = {
    episodes: currentEpisodes,
    store: { state, dispatch },
    toggleFavAction,
    fetchRandomEpisode,
    favourites: state.favourites,
    random: state.random,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
        <div className="pagination">
          <Pagination
            postsPerPage={episodePerPage}
            totalPosts={state.episodes.length}
            paginate={paginate}
          />
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}
