import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Login() {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <div>
                    <LogOutButton />
                </div>
            ) : (
                <div>
                    <p>グーグルアカウントでログインしてください</p>
                    <LoginButton />
                </div>
            )}
        </div>
    )
}

export default Login

// Googleでloginする
function LoginButton() {
    const [error, setError] = useState(null);

    const loginWithGoogle = async () => {
        try {
            // Googleのログイン処理
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.error(err);
            setError(err.mesasge)
        }
    };
    return (
        <div>
            <button onClick={loginWithGoogle}>グーグルでログインする</button>
            {error && <p>{error}</p>}
        </div>
    );

}

// Googleでログアウトする
function LogOutButton() {

    return (
        <div>
            <button onClick={() => auth.signOut()}>グーグルでログアウトする</button>
        </div>
    );
}