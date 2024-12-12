import React, { Fragment, useEffect, useState } from "react";
import Cards from "./Cards";
import "../App.css";
import PaginationComponent from "./PaginationComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllMoveis } from "../redux/actions/movieAction";

function Items({ filttrationData, fetchData }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  function clickPaginationHandler(e) {
    // console.log(e.selected + 1);
    // fetchData((data.page = e.selected + 1));
    dispatch(getAllMoveis((dataMovies.page = e.selected + 1)));
    setData(dataMovies);
  }
  useEffect(() => {
    // fetch data
    // fetchData();
    dispatch(getAllMoveis());
  }, [getAllMoveis]);
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setData(dataMovies);
  }, [dataMovies]);

  console.log(data);

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
          pageCount={dataMovies.total_pages}
        />
      </Fragment>
    );
  }
  return <div className="gallery">no results...</div>;
}

export default Items;
