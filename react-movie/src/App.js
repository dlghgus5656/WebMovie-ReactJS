// import { useState, useEffect } from "react";
// import Movie from "./components/Movie";

function App() {
  return null;
}

export default App;

// cleanup문

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     };
// }, [input]);

// ex)

// useEffect(() => {
//   console.log("hi :)");
//   return () => console("bye :(");
// }, []);

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//         "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//       )
//     ).json();
//     // 위 처럼 await을 김밥 처럼 두겹 사용하면 아래 코드를 작성 불필요함
//     // const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   console.log(movies);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {movies.map((movie) => (
//             <div key={movie.id}>
//               {/* src에 alt 속성을 주지 않으면 react에서 코딩 컨벤션(코드 규칙)을 관리할 때 사용하는 eslint에서 제공하는 warning이 뜬다. */}
//               <img src={movie.medium_cover_image} alt="profile" />
//               <h2>
//                 {movie.title} ({movie.year})
//               </h2>
//               <p>{movie.summary}</p>
//               {/* movie api를 불러와서 genres 부분을 li 로 보여주는 부분에서
//               genres가 없는 영화가 포함되는 경우가 발생하여서
//               uncaught TypeError: Cannot read properties of undefined (reading 'map')
//               에러가 발생하는 경우가 발생

//               hasOwnProperty()함수를 이용하여
//               미리 genres key가 있는지 확인하고 없으면 null로 처리하는 과정이 필요 */}
//               {movie.hasOwnProperty("genres") ? (
//                 <ul>
//                   {movie.genres.map((g) => (
//                     <li key={g}>{g}</li>
//                   ))}
//                 </ul>
//               ) : null}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
