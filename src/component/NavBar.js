import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllMoveis, getMoveis } from "../redux/actions/movieAction";

function NavBar() {
  const dispatch = useDispatch();

  // search using API
  const search = async (word) => {
    if (word.target.value == "") {
      dispatch(getAllMoveis());
    } else {
      dispatch(getMoveis(word.target.value));
    }
  };

  return (
    <nav className=" navbar navbar-light bg-warning justify-content-center navbar-style ">
      <form className="form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          onChange={search}
        />
      </form>
    </nav>
  );
}

export default NavBar;
