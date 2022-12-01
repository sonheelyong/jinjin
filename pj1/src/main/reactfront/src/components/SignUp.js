import React, { useState } from 'react'


  
function SignUp(name) {
  
  const[id,Setid] = useState("");
  const[passwd,Setpasswd] = useState("");
  console.log({id});

  
  return (
  
    <div>
    <form method='post' action='/SignUp'>
        <div>
            <input name='id'></input>
        </div>
        <div>
            <input name='passwd'></input>
        </div>
        <button type='submit'>회원가입</button>
       
    </form>
    
</div>
   
  );
 
  
}

export default SignUp
