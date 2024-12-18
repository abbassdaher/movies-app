import React, { Fragment, useEffect, useState } from "react";
import Cards from "./Cards";
import "../App.css";
import PaginationComponent from "./PaginationComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllMoveis, getPage } from "../redux/actions/movieAction";

function Items() {
  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies);
  const newData = useSelector((state) => state.newData);

  useEffect(() => {
    // fetch data
    dispatch(getAllMoveis());
  }, [getAllMoveis]); 

  // if (filttrationData) {
  //   return (
  //     <Fragment>
  //       <div className="gallery">
  //         {filttrationData.map((item) => (
  //           <Cards key={item.id} item={item} />
  //         ))}
  //       </div>
  //       <PaginationComponent
  //         clickPaginationHandler={clickPaginationHandler}
  //         pageCount={filttrationData.total_pages}
  //       />
  //     </Fragment>
  //   );
  // } else
  if (dataMovies.results) {
    // console.log(dataMovies);

    return (
      <Fragment>
        <div className="gallery">
          {dataMovies.results.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <PaginationComponent/>
      </Fragment>
    );
  }
  return <div className="gallery">no results...</div>;
}

export default Items;
