function MovieCard({ movie }) {
  function likeClicked() {
    return alert("clicked!");
  }
  return (
    <div className="movie-card">
      <div className="movie-name">
        <h3>{movie.name}</h3>
      </div>
      <div className="movie-pic">
        <img src={movie.url} alt={movie.alt} />{" "}
      </div>
      <div className="favorite-movies">
        <button className="like-btn" onClick={likeClicked}>
          ♡
        </button>
      </div>
      <div className="movie-info">
        <p>
          release year:{movie.release_date}
          <br /> about the movie:{movie.info}
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
