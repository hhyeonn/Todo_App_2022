import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";  //아이콘 이름 넣기
import '../styles/TodoInsert.scss'

function TodoInsert({onInsert}) {

  const [value, setValue] = useState(''); 

  const onChange = useCallback (e => {
    setValue(e.target.value); // setValue: value값으로 바꿔라
  },[]);

  const onSubmit = useCallback(e => {
    onInsert(value); // 함수호출
    setValue(''); // + 누르면 입력창 비워지게
    e.preventDefault();
    // submit이벤트는 브라우저에서 새로고침을 발생시킨다
  },[value]); // value값이 바뀔때마다 함수 실행

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input
      placeholder='할 일을 입력하세요.'
      value={value}
      onChange={onChange}
     />
      <button type='submit'> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert