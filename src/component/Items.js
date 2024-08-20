import React from "react";
import Cards from "./Cards";
import "../App.css";

function Items({ data }) {
  if (data.results) {
    return data.results.map((item) => (
      <Cards key={item.id} item={item} />
    ));
       
  }
  return <div>no results...</div>;
}

export default Items;
