import React, { useCallback, useMemo, useRef, useState } from 'react'

const getAverage = lists => {
    console.log('평균값 계산중..');
    if (lists.length === 0) return 0;
    const sum = lists.reduce((a, b) => a + b);
    return sum / lists.length;
};

function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); 
    //useRef : id대신 사용, 특정 input에 포커스 주기 때 사용

    const onChange = useCallback(e => {
        console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성...')
        setNumber(e.target.value);
    },[]);// useCalback() : 컴포넌트가 처음 렌더링(새로고침) 될 때만 함수 생성.
          // 랜더링하는 과정에서 특정 배열값이 바뀌었을때만 이벤트 핸들러 함수 실행, 그 후에 함수 재사용. 

    const onInsert = useCallback(e => {
        console.log('number 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));//concat : 배열에 붙어주는것
        setLists(nextLists);
        setNumber('');
        inputEl.current.focus();
    },[number,lists]); //useCalback() : 배열에 state값이 있으면 number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(lists),[lists]);
    // useMemo() : 랜더링하는 과정에서 특정 값이 바뀌었을때만 연산 실행하고 값이 바뀌지 않았으면 이전의 연산결과를 다시 사용
    // 숫자, 문자열, 객체 처럼 일반값 재사용

  return (
    <div>
        <input value={number} onChange={onChange} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
        <ul>
            {lists.map((list,index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
        <div><b>평균값: </b>{avg}</div>
    </div>
  )
}

export default Average