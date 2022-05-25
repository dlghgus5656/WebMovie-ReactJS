import { useState, useEffect } from "react";

// state를 변경할 때 모든 code들은 항상 다시 실행된다, 원치 않아도.
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      ` http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
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
