import React, { useState } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function PaginationComponent({ clickPaginationHandler,pageCount }) {
  return (
    <Fragment>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onClick={(e) => clickPaginationHandler(e)}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        prevRel="page-item"
        prevPageRel="page-link"


      />
    </Fragment>
  );
}

export default PaginationComponent;
