import api from '../api/app';
import '../styles/login.css';
import { useEffect } from 'react';
//import { useState } from 'react';

export function Login() {
    //const [] = useState()
    useEffect(() => {
        api.get('/admin/login').then((response) => {
            console.log(response.data);
        })
    }, [])

    function handleLogin() {
        /**
         * Lógica de auth -> pegar os usuários do banco e verificar se o 
         * username passado no input existe na base dados
         * assim como se a base do usuario a senha 
         * informada no input confere na base de dados
         * do usuário
         */
    }

    return (
        <div className='container'>
            <div className="card-box">
                <h2>Login</h2>
                <p>Assembleia Legislativa</p>
                
                <div className="form-login">

                    <div className="input-box">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id='username' name='username' />
                    </div>

                    <div className="input-box">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id='password' name='password' />
                    </div>
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}