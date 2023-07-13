import { useEffect, useRef} from "react"

function HookQ () {

  const id = useRef(null);
  const pw = useRef(null); 

  useEffect( () => {
    id.current.focus();
  }, [])


  const handleClick = () => {

    if(id.current.value=='') {
      alert('아이디는 필수입니다')
      id.current.focus();
      return;
    } else if(pw.current.value=='') {
      alert('비밀번호는 필수입니다')
      pw.current.focus();
      return;
    }
    

    alert(`아이디: ${id.current.value}, 비밀번호: ${pw.current.value}`)
    
  }

  


  return(

    <div>

      <input type="text" placeholder="아이디" ref={id}/> <br/>
      <input type="text" placeholder="비밀번호" ref={pw}/> <br/>
      <button onClick={handleClick}>로그인</button>

    </div>

  )


}

export default HookQ