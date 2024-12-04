import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Cards({ item }) {
  
  return (
    <Link to={`/descriptionMovie/:${item.id}`}>
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
    </Link>
  );
}

export default Cards;
