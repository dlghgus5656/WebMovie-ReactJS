import propTypes from "prop-types";

// 무비 컴포넌트는 아래 prop들을 다 부모 컴포넌트로 부터 받아온다.
function Movie({ coverImg, title, year, summary, genres }) {
  return (
    <div>
      {/* src에 alt 속성을 주지 않으면 react에서 코딩 컨벤션(코드 규칙)을 관리할 때 사용하는 eslint에서 제공하는 warning이 뜬다. */}
      <img src={coverImg} alt={title} />
      <h2>
        {title} ({year})
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      {/* movie api를 불러와서 genres 부분을 li 로 보여주는 부분에서
    // genres가 없는 영화가 포함되는 경우가 발생하여서
    // uncaught TypeError: Cannot read properties of undefined (reading 'map')
    // 에러가 발생하는 경우가 발생 따라서 위와 같이 genres가 있는지 먼저 확인 한 다음
  map을 이용해 그려준다.*/}
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
  // 위와 같은 이유로 genres에는 isRequired를 빼준다.
};

export default Movie;
