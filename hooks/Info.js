import React, { useEffect, useState } from 'react'

function Info() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value)
        // 이벤트 타겟이 된 값(적혀진 값)을 const[name]으로 보내라
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다 componentDidMount()");
        console.log({name,nickname}); 
    },[name, nickname]); //state값이 있으면 componentDidUpdate()역할을 한다.

  return (
    <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div>
            <div> <b>이름: </b> {name} </div>
            <div> <b>닉네임: </b> {nickname} </div>
        </div>
    </div>
  )
}

export default Info