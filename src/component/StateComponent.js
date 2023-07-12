import {useState} from "react";

function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값
  /* const result = useState('초기값')
  console.log(result); */ //배열 0번째는 ( ) 내부의 값 (초기값) 1번째는 함수
  //const a = result[0]; //현재값
  //const a = result[1]; //함수


  const [data, setDate] = useState([1,2,3]);
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('black');

  //state는 절대 직접 값을 바꾸면 안됩니다.
  //data = '이거 바꿔야지';

  //state는 이벤트 or 특정 함수아에서 바꾸도록 처리합니다
  //setDate('변경해야지') //무한루트

  const handleDate = () => {
    setDate('체인지!'); //비동기적으로 state 값을 변경
    setNum(10);
  }

  //빨간색 변경
  //const handleColor = () => setColor('red');

  return(

    <div>
      스테이트값 : {data} <br/>
      스테이트값 : {num} <br/>

      {/* 함수 명에 소괄호를 붙이지 않음 */}
      <button onClick={handleDate}>스테이트값 변경</button> <br/>
      
      <h3 style={{color: color}}>{data}</h3>
      {/* <button onClick={() => setColor('red')}>붉은색</button> */}
      <button onClick={() => {
        setColor('red')
        }}>붉은색</button>
      <button onClick={() => setColor('blue')}>푸른색</button>
      <button onClick={() => setColor('yellow')}>그 사이 3초 짧은색</button>


    </div>

  )

}


export default StateComponent