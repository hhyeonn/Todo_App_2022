import React, { useState } from 'react' //rfce

function Counter() {
//   const [isLoading,setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
const [value, setValue] = useState(0);

  return (
    <>
    {/* <div>{isLoading}</div>
    <button onClick={()=>setIsLoading(false)}>클릭</button>
    <button onClick={()=>setMovies([1,2,3])}>클릭2</button> */}
    {/* (클릭하면 호출한다)=>set함수(Movies) [1,2,3] 값을 넣어줌 */}
    
    <h1>useState Hook 사용하기</h1>
    <p>현재 카운터 값은: <b>{value}</b> 입니다.</p>
    <button onClick={()=>setValue(value + 1)}>더하기</button>
    <button onClick={()=>setValue(value - 1)}>빼기</button> 
    {/* setValue가 const [value]값이 바뀐다 */}
    </>
  )
}

export default Counter