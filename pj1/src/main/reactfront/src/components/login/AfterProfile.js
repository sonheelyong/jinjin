import React from 'react';

export default function AfterProfile ({userInfo}) {
    return (
        <>
        <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '32px'}}
            />
        <h3>이름: {userInfo.name} </h3>    
        <h3>이메일: {userInfo.email}</h3>
        
        </>
    );
}

