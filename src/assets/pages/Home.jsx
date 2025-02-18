import MovieCard from "../components/moviecard";
import favorites from "./favorites";
import { useState } from "react";
function Home() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: "01",
      name: "Enthiran",
      url: "",
      alt: "Enthiran.jpg",
      release_date: "2010",
      info: "",
    },
    {
      id: "02",
      name: "Anjan",
      url: "",
      alt: "Anjan.jpg",
      release_date: "2011",
      info: "",
    },
  ];
  const handlesearch = (e) => {
    e.preventDefault();
    alert(search);
  };
  return (
    <div className="Home">
      <form onSubmit={handlesearch} className="Search-form">
        <input
          type="text"
          placeholder="search the movie"
          className="searchbar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="card-arrangements">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
