import { useEffect, useState } from 'react';
import { api } from '../../api/app';
import logo from '../../assets/logo-assembleia.png';
import './navbar.css';

export function Navbar() {
    const [search, setSearch] = useState('')
    const [send, setSend] = useState(false)
    useEffect(() => {
        api.get('/searchBar/',{
            search: search
        }).then(response => {
            console.log(response.data)
        })
    }, [send])


    return (
        <div className="bar">
            <div className="logo">
                <img src={logo} alt="" />
                <div className="logo-content">
                    <p>Assembleia Legislativa do <br /> Estado do Maranhão</p>
                </div>
            </div>
            <div>
                <input type="search" name="" id="" placeholder='Pesquisar' onChange={e => setSearch(e.target.value)}/>
                <button onClick={setSend}>Enviar</button>
            </div>
        </div>
    )
}