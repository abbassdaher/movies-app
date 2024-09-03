import React from "react";
import Cards from "./Cards";
import "../App.css";

function Items({ data, filttrationData }) {
  if (filttrationData) {
    return filttrationData.map((item) => <Cards key={item.id} item={item} />);
  } else if (data) {
    return data.map((item) => <Cards key={item.id} item={item} />);
  }
  return <div>no results...</div>;
}

export default Items;
