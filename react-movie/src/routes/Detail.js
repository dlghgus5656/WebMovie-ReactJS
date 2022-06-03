import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieid, setId] = useState([]);
  // react-router-dom을 이용해 id값을 찾아 온다.
  const { id } = useParams();

  const getMovie = async () => {
    const json =
      await // id값을 알고 있기 때문에 API로 부터 정보를 fetch 해올 수 있다.
      (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    console.log(json);

    setId(json.data.movie.id);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>;
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieid.map((movie) => (
            <Movie
              // key는 react.js에서만 map 안에서 컴포넌트들을 render할 때 사용한다.
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
