import { useEffect, useRef, useState} from "react"

function HookQA () {

  //input태그 핸들링
  const [form, setForm] = useState({id: '', pw: ''});

  //inputRef 선언
  const idRef = useRef(null);
  const pwRef = useRef(null);


  const handleChange = (e) => {
    const copy = {...form, [e.target.name]: e.target.value};
    setForm(copy);
  }

  //useEffect 첫번째 마운트에 포커싱
  useEffect( () => {
    idRef.current.focus();
  }, [] )


  const handleClick = () => {

    if(form.id==='') {
      alert('아이디는 필수입니다')
      idRef.current.focus();
      return;
    } else if(form.pw==='') {
      alert('비밀번호는 필수입니다')
      pwRef.current.focus();
      return;
    }
    

    alert(`id: ${form.id}, pw: ${form.pw}`);
    
  }

  


  return(

    <div>

      <input type="text" name="id" onChange={handleChange} value={form.id} ref={idRef} placeholder="아이디" /> <br/>
      <input type="password" name="pw" onChange={handleChange} value={form.pw} ref={pwRef} placeholder="비밀번호" /> <br/>
      <button type="button" onClick={handleClick}>로그인</button>

    </div>

  )


}

export default HookQA