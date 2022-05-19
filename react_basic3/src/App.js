import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //currentArray 베열에 toDo값이 추가 된다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="입력해주세요..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// form은 submit 이벤트를 갖고 있다.
// 그러므로 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
// 여러 개의 toDo를 받을 수 있는 배열 만들기
// const [toDos, setToDos] = useState([]); -> 기본값은 비어있는 배열
// state는 직접적으로 수정 불가능 (예 : toDo = “” )
// 함수를 가져와서 수정하게 만들어야함 (예 : setToDo = (“”) )
// 그래서 toDos 배열을 수정하고 싶다면 수정하는 함수를 써야함

// setToDos(currentArray => [toDo, ...currentArray]);
// -> ...을 써서 currentArray 배열에 toDo를 추가 시켜줌
// 어플리케이션이 시작될 때는 비어있는 배열을 가짐
// 첫 번째 to-do를 입력할 때 비어있는 currentArray 받아옴
// 이건 새로운 toDos가 input을 통해 작성한 toDo와
// 아무것도 들어있지 않은 빈 배열의 element가 더해지게 된다는 것
// 첫 번째 toDo 가 Hello라면 엔터를 눌러 실행됨
// 그리고 byebye라고 적으면
// currentArray에는 Hello 이미 있고 toDo는 byebye가 되는 것
// 그리고 currentArray는 Hello와 byebye를 가지고 있는 배열이 됨

// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함
export default App;
