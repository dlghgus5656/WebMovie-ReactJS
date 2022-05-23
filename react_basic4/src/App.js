import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    //api 뒤 limit을 사용하면 받는 정보의 개수를 조정할 수 있다.
    fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>코인입니다!</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;
