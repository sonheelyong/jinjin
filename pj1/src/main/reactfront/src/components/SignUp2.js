// import React, { useState } from 'react'
// import axios from 'axios';
// import Country from './Country';
// import NationNumber from './NationNumber';

// function SingUp2() {
//   const[nation,Setnation] = useState("");
//   const[nationnum,Setnationnum] = useState("");
//   const[Pnum,SetPnum] = useState("");
//   const[email,Setemail] = useState("");
//   const[nickname,Setnickname] = useState("");
//   const[passwd,Setpasswd] = useState("");
  

//   return(
// <div>
  
//   <div>
//   국가<Country onChange={(e)=>{
//    console.log(e.target.value);
//   }}></Country>
//   </div>
//   <div>
//   폰번호<NationNumber onChange={(e)=>{
//    console.log(1);
//   }}></NationNumber>
//   <input  onChange={(e)=>{
//     SetPnum('1');
//   }}/>
//     <input placeholder='인증번호' 
//   />
//   </div>
//   <div>
//   이메일<input  onChange={(e)=>{
//     Setemail(e.target.value);
//   }}/>
//   </div>
//   <div>
//   닉네임<input  onChange={(e)=>{
//     Setnickname(e.target.value);
//   }}/>
//   </div>
//   <div>
//   비밀번호<input onChange={(e)=>{
//     Setpasswd(e.target.value);
//   }}/>
//   </div>
  

// <button
//       onClick={
//         ()=>{
//           axios.get('/SignUp',{
//             params:{
//               nationnum:nationnum,
//               nation:nation,
//               Pnum:Pnum,
//               email:email,
//               nickname:nickname,
//               passwd:passwd,        
//             }
//           }).catch(function(){
//             console.log('실패함')
//           })
//         }}
//     >가입</button>
//   </div>
  
//   )
// }

// export default SingUp2
