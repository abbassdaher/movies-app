import { Fragment, useEffect, useState } from "react";

import "./App.css";
import Items from "./component/Items";
import NavBar from "./component/NavBar";
import axios from "axios";
import PaginationComponent from "./component/PaginationComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ErroPage from "./component/ErroPage";
import DescriptionMovie from "./component/DescriptionMovie";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoveis } from "./redux/actions/movieAction";
import { type } from "@testing-library/user-event/dist/type";
import { allMoveis } from "./redux/types/moviesType";

function App() {
  const [filttrationData, setFilttrationData] = useState();

  // Fetch data when the component mounts and unmounts
  // async function fetchData(page = 1, language = "en-US") {
  //   await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=5835097ab608205f211ea3c019e725a6&language=${language}&page=${page}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error:", error));
  // }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/card" />
          <Route path="/descriptionMovie/:id" element={<DescriptionMovie />} />
          <Route path="*" element={<ErroPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
