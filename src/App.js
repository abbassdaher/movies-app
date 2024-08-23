import { useEffect, useState } from "react";
import "./App.css";
import Items from "./component/Items";
import ObjectOfData from "./component/ObjectOfData";

function App() {
  const [data, setData] = useState({});
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
  return (
    <div>
      <div className="gallery ">
      <Items data = {data}/>
      </div>
    </div>
  );
}

export default App;
