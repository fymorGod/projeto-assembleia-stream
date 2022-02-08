//import api from '../api/app';
import '../styles/login.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../api/app';

export function Register() {
    const [username, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [] = useState()
    // useEffect(() => {
    //     api.get('/admin/login').then((response) => {
    //         console.log(response.data);
    //     })
    // }, [])

    function handleCreateUser() {
        api.post('/register/', {
            username: username,
            password: password,
            email: email,
        }).then(response => {
            console.log(response.data);
        });
    
    }

    return (
        <div className='container-login'>
            <div className="card-box">
                <h2>Cadastro</h2>
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

                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <button onClick={handleCreateUser}>Registrar</button>
                </div>
            </div>
        </div>
    )
}