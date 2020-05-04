import React from "react";
import { IPagination } from "./interfaces";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
}: IPagination): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item ">
            <button
              onClick={() => paginate(number)}
              className="page-link active"
            >
              <span className="active">{number}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
