import {useState} from "react";

function StateComponentQ() {

const [count, setCount] = useState(0);


return(

  <div>
    <h3>카운트 : {count}</h3>
    <br/>
    <button onClick={ () => setCount(count+1)}>증가</button>
    <button onClick={ () => setCount(count-1)}>감소</button>
    <button onClick={ () => setCount(0)}>초기화</button>

  </div>
  
  )
}

export default StateComponentQ

