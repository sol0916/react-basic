import { useState } from "react"


function IterationComponentQ() {

  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
  ]

 
  const [inputData, setInputDate] = useState('');
  
  const handleClick = (e) => {
    setInputDate(e.target.src);
  }

  const list = arr.map(item => <li key={item} style={{display:"inline-block", textAlign:"center", padding:"10px"}}>
                                <img src={item.src} onClick={handleClick} />
                                <p>상품:{item.title}</p><p>가격:{item.price}원</p></li>)


return(

    <div>
      <h3>이미지 데이터 반복해보기</h3>
      <img src={inputData}/>

      <ul style={{listStyle:"none"}}>
        {list}
      </ul>      

    </div>


  )


}

export default IterationComponentQ