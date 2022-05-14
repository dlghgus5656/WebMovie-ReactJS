import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// state를 변경할 때 모든 code들은 항상 다시 실행된다, 원치 않아도.
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("항상 실행");
  const iRunOnlyOnce = () => {
    console.log("한번만 실행");
  };
  // useEffect를 사용하면 state가 변경되어도 다시 실행하지 않는다.
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("이것도 한번만 실행~");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Contunue"} />
    </div>
  );
}

export default App;
