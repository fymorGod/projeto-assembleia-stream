//import api from '../api/app';
import '../styles/login.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../api/app';

export function Login() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    //const [] = useState()
    // useEffect(() => {
    //     api.get('/admin/login').then((response) => {
    //         console.log(response.data);
    //     })
    // }, [])

    function handleLogin() {
        api.get('/admin/login/submit/', {
            username: username,
            password: password
        }).then(response => {
            console.log(response.data);
        })
    }

    return (
        <div className='container-login'>
            <div className="card-box">
                <h2>Login</h2>
                <p>Assembleia Legislativa</p>
                
                <div className="form-login">

                    <div className="input-box">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id='username' name='username' onChange={e => setUser(e.target.value)}/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id='password' name='password' onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
}