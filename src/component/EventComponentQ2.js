import { useState } from "react"

function EventComponentQ2() {

const [data, setData] = useState({title: '', result: ''})

const handleClick = () => {
  setData({title: '', result: data.title});
  
}

const handleChange = (e) => {
  //e.target <== tag
  setData({title: e.target.value, reuslt: data.result})
  //const copy = {...data, [e.target.name] : e.target.value }; //객체 복사
  //setData(copy);
}

return(

  <div>

    <h3>인풋데이터 핸들링(실습)</h3>
    <input type="text" /* name="title" */ onChange={handleChange} value={data.title}/>
    <button type="button" onClick={handleClick}>추가하기</button>

    <h3>결과</h3>
    <p>{data.result}</p>

  </div>

)


}

export default EventComponentQ2