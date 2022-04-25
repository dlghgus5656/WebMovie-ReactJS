type = "text/babel";
function MinutesToHours() {
  //useState는 배열을 제공해준다.
  // const [값, 값을 바꿔줄 함수] = React.useState(0);
  // 위와 같이 useState를 사용하면 리렌더링을 해줄 필요가 없어진다.
  // const [counter, setCounter] = React.useState(0);
  // const onClick = () => {
  // 현재 state를 기반으로 계산하고 싶다면, 함수를 이용하자.
  // 아래 둘 모두 같은 결과를 불러오지만 첫번째 코드처럼 함수를 주는게 더 안전하다.
  // setCounter((current) => current + 1);
  // setCounter(counter + 1);
  // };
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);

  const onFlip = () => {
    reset();
    // !를 사용해 flipped 값과 반대되는 값으로 바꿔준다.
    setFlipped((current) => !current);
  };
  return (
    <div>
      <div>
        <laber htmlfor="minutes">Minutes</laber>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>

      <div>
        <laber htmlfor="hours">Hours</laber>
        <input
          //Math.round로 반올림해서 출력
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          // 값을 입력할 수 없게 막음
          disabled={flipped === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}> Reset</button>
      <button onClick={onFlip}> {flipped ? "Turn back" : "Flip"}</button>
    </div>
  );
}
function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const onInvert = (e) => {
    setInverted((current) => !current);
    reset();
  };
  const reset = () => {
    setAmount(0);
  };

  return (
    <div>
      <div>
        <label forHtml="km"> Kilometers </label>
        <input
          value={inverted ? amount * 1.6 : amount}
          id="km"
          placeholder="km"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label forHtml="miles"> Miles </label>
        <input
          value={inverted ? amount : amount / 1.6}
          id="miles"
          placeholder="miles"
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}> Reset </button>
      <button onClick={onInvert}> Inverter </button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>변환기</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
