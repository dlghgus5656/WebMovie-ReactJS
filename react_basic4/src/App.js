import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState([]);
  useEffect(() => {
    //api 뒤 limit을 사용하면 받는 정보의 개수를 조정할 수 있다.
    fetch("https://api.coinpaprika.com/v1/tickers?limit=4000")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function onChange(event) {
    setMyMoney(event.target.value);
  }

  return (
    <div>
      <h1>코인입니다! {loading ? "" : `(${coins.length}개)`}</h1>
      <input
        onChange={onChange}
        value={myMoney}
        type="number"
        placeholder="Please Write your USD"
      />
      {/* 삼항연산자 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {/* {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))} */}
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}):
              {myMoney / coin.quotes.USD.price} {coin.symbol}
            </option>
          ))}
        </select>
      )}

      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
