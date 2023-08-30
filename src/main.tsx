import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ChampCardList from "./components/ChampCardList/ChampCardList";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

function LeagueChampList() {
  const [champNameSearch, setChampNameSearch] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChampNameSearch(event.target.value);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Search for a champion"
          value={champNameSearch}
          onChange={handleSearchChange}
        />
      </div>
      <ChampCardList champNameSearch={champNameSearch} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>LeagueChampList</h1>
    <LeagueChampList/>
  </React.StrictMode>
);
