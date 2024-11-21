import React, { Fragment } from "react";
import Cards from "./Cards";
import "../App.css";
import PaginationComponent from "./PaginationComponent";

function Items({ data, filttrationData,fetchData }) {
  function clickPaginationHandler(e) {
    console.log(e.selected+1);
      fetchData((data.page = e.selected+1));
  }
  if (filttrationData) {
    return (
      <Fragment>
        <div className="gallery">
          {filttrationData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <PaginationComponent
          clickPaginationHandler={clickPaginationHandler}
          pageCount={filttrationData.total_pages}
        />
      </Fragment>
    );
  } else if (data.results) {
    // console.log(data);
    
    return (
      <Fragment>
        <div className="gallery">
          {data.results.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <PaginationComponent
          clickPaginationHandler={clickPaginationHandler}
          pageCount={data.total_pages}
        />
      </Fragment>
    );
  }
  return <div className="gallery">no results...</div>;
}

export default Items;
