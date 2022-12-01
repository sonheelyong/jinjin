import React, { useState } from 'react'
import axios from 'axios';

function SingUp2() {

    const[id,Setid] = useState("");
    const[passwd,Setpasswd] = useState("");
    
  return (
    <div>
         <input  onChange={(e)=>{
      Setid(e.target.value);
    }}/>
       <input onChange={(e)=>{
      Setpasswd(e.target.value);
    }}/>
      
    <button onClick={
        ()=>{
            axios.post('/SignUp',{
            params:{
                id:id,
                passwd:passwd
            }
            }).catch(function(){
                console.log('실패')
            })
        }}> 가입 </button>


      
    </div>
  )
}

export default SingUp2
