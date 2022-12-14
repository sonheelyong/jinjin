
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Users() {
    const [userid, Setuserid] = useState("");
    const [passwd, Setpasswd] = useState("");

   
        axios
            .get('/List')
            .then((response) => {
                console.log(response.data);
          
                Setuserid(response.data[0].userid);
                Setpasswd(response.data[0].passwd);
           
            })
            .catch((error)=>{
                console.log(error);
            })
            return (
              <div>          
                      <p>username<input type="text" required={true} value={userid} ></input></p>
                      <p>password<input type="text" required={true} value={passwd} ></input></p>                
                  
              </div>
          )
    }
   
export default Users;