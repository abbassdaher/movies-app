import { Fragment, useEffect, useState } from "react";

import "./App.css";
import Items from "./component/Items";
import NavBar from "./component/NavBar";
import axios from "axios";
import PaginationComponent from "./component/PaginationComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ErroPage from "./component/ErroPage";
import DescriptionMovie from "./component/DescriptionMovie";

function App() {
  const [data, setData] = useState({});
  const [filttrationData, setFilttrationData] = useState();
  // Fetch data when the component mounts and unmounts
  async function fetchData(page = 1, language = "en-US") {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=5835097ab608205f211ea3c019e725a6&language=${language}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }
  useEffect(() => {
    // fetch data
    fetchData();
  }, []);
  console.log(data);

  const searchHandeler = (e) => {
    // search
    // const filltredMovie = data.results.filter((movie) =>
    //   movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // if (filltredMovie) setFilttrationData(filltredMovie);
    // console.log(e.target.value);
    search(e.target.value);
  };
  // search using API
  const search = async (e) => {
    if (e == "") {
      fetchData();
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${e}&api_key=5835097ab608205f211ea3c019e725a6`
      );
      setData(response.data);
    }
  };
  function clickPaginationHandler(e) {
    console.log(e.selected+1);
    
    // // fetchData(data.page + 1);
    // // fetch the data with page number when clicked

    // if (e.event.target.text == "next >") {
    //   fetchData((data.page = data.page + 1));
    // } else if (e.event.target.text == "< previous") {
    //   fetchData((data.page = data.page - 1));
    //   // console.log(e.event.target.text);
    // } else {
    //   fetchData((data.page = parseInt(e.event.target.text)));
    // }
    // // fetchData(data.page=parseInt(e.event.target.text));
    // // console.log(e.event.target.text);
  }

  return (
    <div>
      <div>
        <NavBar search={searchHandeler} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Items data={data} fetchData={fetchData} />} />
          <Route path="/card"  />
          <Route path="/descriptionMovie/:id" element={<DescriptionMovie />} />
          <Route path="*" element={<ErroPage />} />
        </Routes>
      </BrowserRouter>

      {/* <div className="gallery ">
        <Items data={data.results} />
      </div> */}
      {/* <PaginationComponent
        clickPaginationHandler={clickPaginationHandler}
        pageCount={data.total_pages}
      /> */}
    </div>
  );
}

export default App;
