import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DescriptionMovie() {
  const [info, setInfo] = useState({});
  const parms = useParams({});
  console.log(parms.id.slice(1));

  async function getDescriptionOfFilm(parms) {
    await fetch(
      `https://api.themoviedb.org/3/movie/${parms.id.slice(1)}?api_key=5835097ab608205f211ea3c019e725a6&append_to_response=videos,images`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setInfo(data);
      });
  }
  // getDescriptionOfFilm(parms);
  useEffect(() => {
    getDescriptionOfFilm(parms);
  }, []);
  console.log(info);

  return (
    /* From Uiverse.io by Satwinder04 */
    <div class="card">
      <div class="card__image">
        <img
          src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
          alt="no Image"
        />
      </div>
      <div class="card__content">
        <p class="card__title">{info.title}</p>
        <p class="card__text">{info.tagline!==""?info.tagline:"no have description"} </p>
        <p class="card__text">Rating: {info.vote_average
!==""?info.vote_average
:"no have description"} </p>

        <Link to="/gallery">
          <a class="card__button " href="#">
            back
          </a>
        </Link>
        <a class="card__button " href="#">
          See
        </a>
      </div>
    </div>
  );
}

export default DescriptionMovie;
