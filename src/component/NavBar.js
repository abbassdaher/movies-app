import React from "react";

function NavBar({search}) {
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
