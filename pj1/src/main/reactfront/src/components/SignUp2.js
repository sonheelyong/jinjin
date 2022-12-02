import React, { useState } from 'react'
import axios from 'axios';

function SingUp2() {
  const[nation,Setnation] = useState("");
  const[Pnum,SetPnum] = useState("");
  const[email,Setemail] = useState("");
  const[nickname,Setnickname] = useState("");
  const[passwd,Setpasswd] = useState("");
  

  return(
<div>
  국가<input  onChange={(e)=>{
    Setnation(e.target.value);
  }}/>
  폰번호<input  onChange={(e)=>{
    SetPnum(e.target.value);
  }}/>
    <input placeholder='인증번호' 
  />
  이메일<input  onChange={(e)=>{
    Setemail(e.target.value);
  }}/>
  닉네임<input  onChange={(e)=>{
    Setnickname(e.target.value);
  }}/>
  비밀번호<input onChange={(e)=>{
    Setpasswd(e.target.value);
  }}/>
  

<button
      onClick={
        ()=>{
          axios.get('/SignUp',{
            params:{
              nation:nation,
              Pnum:Pnum,
              email:email,
              nickname:nickname,
              passwd:passwd,        
            }
          }).catch(function(){
            console.log('실패함')
          })
        }}
    >전송</button>
  </div>
  
  )
}

export default SingUp2
