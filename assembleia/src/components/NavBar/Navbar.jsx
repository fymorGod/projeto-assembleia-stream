import {useState } from 'react';
import { api } from '../../api/app';
import logo from '../../assets/logo-assembleia.png';
import './navbar.css';

export function Navbar() {
    const [search, setSearch] = useState('')

    function handleSearch(){
        api.post('/searchBar/',{
            search: search
        }).then(response => {
            console.log(response.data)
        })
    }

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
                <button onClick={handleSearch} className='btn-send-search'>Enviar</button>
            </div>
        </div>
    )
}