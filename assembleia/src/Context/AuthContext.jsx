import { createContext, useEffect, useState } from "react";
import { api } from "../api/app";
import { useNavigate } from 'react-router';
const Context = createContext();

function AuthProvider ({children}) {
    const [authenticate, setAuthenticate] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticate(true)
        }
        setLoading(false)
    },[])

    async function handleLogin ({username, password}){
        const { data: { token } } = await api.post('');
        localStorage.setItem('token', JSON.stringify(token))

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticate(true);
        navigate('/admin/system')
    }

    return (
        <Context.Provider value={{authenticate, handleLogin, loading}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}