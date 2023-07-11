import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"
import MyComponent4 from "./component/MyComponent4"


function App() {

  return (

    <Fragment>
      <div>나의 새로운 컴포넌트</div>
  
      <MyComponent name={'홍길동'} age={20} addr={'서울시'} email={'상위@naver.com'}/>
      <MyComponent name={'이순신'} age={30} addr={'경기도'}/>
      
      
      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={'신사임당'} age={40}/>

      {/* 
      함수형 컴포넌트 MyComponent3를 생성합니다
      props는 title, content, writer를 전달합니다.
      writer의 기본값은 admin으로 선언해주세요 
      */}
      <MyComponent3 title={'함수형 컴포넌트'} content={'실습중'} />
      <MyComponent4 title={'클래스형 컴포넌트'} content={'실습중'} writer={'포차코'}/>
      
    </Fragment>
  
  )

}

export default App