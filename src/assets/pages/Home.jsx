import MovieCard from "../components/moviecard";
import { useState } from "react";
function Home() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: "01",
      name: "Enthiran",
      url: "public/images/enthiran.jpg",
      alt: "Enthiran.jpg",
      release_date: "2010",
      info: "",
    },
    {
      id: "02",
      name: "Anjan",
      url: "public/images/anjan.jpg",
      alt: "Anjan.jpg",
      release_date: "2011",
      info: "",
    },
    {
      id: "03",
      name: "Bahubali",
      url: "public/images/asuran.jpg",
      alt: "asuran.jpg",
      release_date: "2012",
    },
    {
      id: "04",
      name: "Bahubali",
      url: "public/images/bahubali.jpg",
      alt: "Bahubali.jpg",
      release_date: "2012",
    },{
      id: "01",
      name: "Enthiran",
      url: "public/images/enthiran.jpg",
      alt: "Enthiran.jpg",
      release_date: "2010",
      info: "",
    },
    {
      id: "02",
      name: "Anjan",
      url: "public/images/anjan.jpg",
      alt: "Anjan.jpg",
      release_date: "2011",
      info: "",
    },
    {
      id: "03",
      name: "Bahubali",
      url: "public/images/asuran.jpg",
      alt: "asuran.jpg",
      release_date: "2012",
    },
    {
      id: "04",
      name: "Bahubali",
      url: "public/images/bahubali.jpg",
      alt: "Bahubali.jpg",
      release_date: "2012",
    },
  ];
  const handlesearch = (e) => {
    e.preventDefault();
    alert(search);
  };
  return (
    <div className="Home">
      <form onSubmit={handlesearch} className="Search-Form" id="search">
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
