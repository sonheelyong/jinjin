import React, { useEffect } from 'react';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import { useNavigate } from 'react-router-dom';

import { postLoginToken } from '../../api/PostLoginToken';


export default function Login({isLogin, setIsLogin}) {

    const navigate = useNavigate();

    
    

    const onGoogleLogin = async res => {
        const {credential} = res;
        const result = await postLoginToken(credential, setIsLogin);
        setIsLogin(result);
    };

    useEffect(() => {
        if (!isLogin) return;
        navigate('/mypage');
    }, [isLogin]);

    return (
       <>
        <div>
            <h1>Google Login</h1>
            
            <GoogleLoginButton onGoogleSignIn={onGoogleLogin} text='로그인' />
        </div>
       </>
    );
}

