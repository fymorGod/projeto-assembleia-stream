//import api from '../api/app';
import '../styles/login.css';
import { useContext, useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';

//import { Context } from '../Context/AuthContext';

export function Login() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //const {authenticate, handleLogin} = useContext(Context)
    //const [] = useState()
    // useEffect(() => {
    //     api.get('/admin/login').then((response) => {
    //         console.log(response.data);
    //     }) 
    // }, [])
    
  

    function handleLogin() {
        api.post('/login/', {
            username: username,
            password: password
        }).then(response => {
           if (response.data){
               navigate('/admin/system')
           }
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