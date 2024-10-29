import React, { useState } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function PaginationComponent({ clickPaginationHandler }) {
  return (
    <Fragment>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onClick={(e) => clickPaginationHandler(e)}
      />
    </Fragment>
  );
}

export default PaginationComponent;
