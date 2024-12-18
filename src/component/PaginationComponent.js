import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Items from "./Items";
import { useDispatch, useSelector } from "react-redux";
import { newData } from "../redux/types/moviesType";
import { getAllMoveis, getPage } from "../redux/actions/movieAction";

function PaginationComponent() {
  const [pageCount, setPageCount] = useState({});
  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies);

  function clickPaginationHandler(e) {
    dispatch(getPage((dataMovies.page = e.selected + 1)));
    setPageCount(dataMovies);
  }

  return (
    <div className="pagination-style">
      <ReactPaginate
        breakLabel="..."
        onPageChange={clickPaginationHandler}
        nextLabel="next >"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={dataMovies.total_pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        // onClick={(e) => clickPaginationHandler(e)}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousLinkClassName="page-link"
        nextClassName="page-link"
        breakClassName="page-link"
      />
    </div>
  );
}

export default PaginationComponent;
