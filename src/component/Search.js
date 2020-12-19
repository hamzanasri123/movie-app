import React, { useState } from "react";
import AddMovie from "./AddMovie";
import "./style.css";
function Search({ hundelClick, setSearch }) {
  const hundelClickk = (e) => setSearch(e.target.value);

  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Film..."
        />
      </div>
      <div></div>
    </div>
  );
}

export default Search;
