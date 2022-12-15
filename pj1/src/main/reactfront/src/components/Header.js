import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {

    return (
        <>
        <header>
            <nav>
                <Link to = {'/'}> Home</Link> 
                <Link to = {'/about'}> about</Link> 
                <Link to = {'/profile'}> Profile</Link> 
                <Link to = {'/signup'}> SignUp</Link> 
                <Link to = {'/signup2'}> SignUp2</Link> 
                <Link to = {'/userList'}> UserList</Link> 
                <Link to = {'/googleLoginButton'}> GoogleLogin</Link>
            </nav>
        </header>
        </>
    );
}

