import { useEffect, useState } from "react";
import "./App.css";
import Items from "./component/Items";
import ObjectOfData from "./component/ObjectOfData";
import NavBar from "./component/NavBar";

function App() {
  const [data, setData] = useState({});
  const [filttrationData, setFilttrationData] = useState();
  // Fetch data when the component mounts and unmounts
  async function fetchData() {
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5835097ab608205f211ea3c019e725a6&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }
  useEffect(() => {
    // fetch data
    fetchData();
  }, []);
  // console.log(data);

  const searchHandeler = (e) => {
    const filltredMovie = data.results.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (filltredMovie) setFilttrationData(filltredMovie);
  };

  return (
    <div>
      <div>
        <NavBar search={searchHandeler} />
      </div>
      <div className="gallery ">
        <Items data={data.results} filttrationData={filttrationData} />
      </div>
    </div>
  );
}

export default App;
