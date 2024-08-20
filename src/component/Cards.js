import React from "react";
import "../App.css";

function Cards({ item }) {
  console.log (item );

  return (
    <div className="gallery-items">
      <img className="item-images" src={`https://image.tmdb.org/t/p/w500/`+ item.backdrop_path } alt="poster" />
      <div className="gallery-items-section">
        <h4>{item.title}</h4>
        <p>{item.overview}</p>
      </div>
    </div>
  );
}

export default Cards;
