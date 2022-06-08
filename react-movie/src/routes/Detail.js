import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
// import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  // react-router-dom을 이용해 id값을 찾아 온다.
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json =
      await // id값을 알고 있기 때문에 API로 부터 정보를 fetch 해올 수 있다.
      (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    console.log(json);

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  console.log(movie);

  return (
    <div>
      {/* <h1>Detail</h1> */}
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail}>
          <img
            src={movie.large_cover_image}
            alt={movie.large_cover_image}
            className={styles.movie_img}
          />
          <div>
            <h2 className={styles.movie_title}>
              {movie.title} ({movie.year})
            </h2>
            <p>{movie.description_full}</p>
            <ul className={styles.movie_genres}>
              {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
