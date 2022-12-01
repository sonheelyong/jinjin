import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
    const [vo, setUsers] = useState([]);

    useEffect(() => {

  fetch(('/List')
  .then((response) => {
    return response.json();
    })
  .then((error) => { 
    console.log("error:", error);

    });

        
}, []);

   
}
export default UserList;