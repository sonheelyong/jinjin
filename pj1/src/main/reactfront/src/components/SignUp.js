import React, { useState } from 'react'


  
function SignUp(name) {
  
  const[id,Setid] = useState("");
  const[passwd,Setpasswd] = useState("");
  
  return (
  
    <div>
    <form method='post' action='/SignUp'>
        <div>
           아이디 <input name='id'></input>
        </div>
        <div>
           비밀번호 <input name='passwd'></input>
        </div>
        <button type='submit'>회원가입</button>
       
    </form>
    
</div>
   
  );
 
  
}

export default SignUp
