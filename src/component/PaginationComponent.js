import React, { useState } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function PaginationComponent({ clickPaginationHandler,pageCount }) {
  
  return (
    <div className="pagination-style">
      <ReactPaginate
        breakLabel="..."
        onPageChange={clickPaginationHandler}
        nextLabel="next >"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
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
