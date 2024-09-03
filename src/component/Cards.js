import React from "react";
import "../App.css";

function Cards({ item }) {

  return (
    <div className="gallery-items">
      <img
        className="item-images"
        src={`https://image.tmdb.org/t/p/w500/` + item.backdrop_path}
        alt="poster"
      />
      <div className="gallery-items-section ">
        <h5>{item.title}</h5>
        <h6>release: {item.release_date}</h6>
      </div>
    </div>
  );
}

export default Cards;
