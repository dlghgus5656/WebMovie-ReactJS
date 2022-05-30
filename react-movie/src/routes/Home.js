import { useState, useEffect } from "react";
import Movie from "./components/Movie";

function Home() {
  // state를 변경할 때 모든 code들은 항상 다시 실행된다, 원치 않아도.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    // 위 처럼 await을 김밥 처럼 두겹 사용하면 아래 코드를 작성 불필요함
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              // key는 react.js에서만 map 안에서 컴포넌트들을 render할 때 사용한다.
              key={movie.id}
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

export default Home;
