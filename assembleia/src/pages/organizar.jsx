import { useEffect, useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';
import '../styles/admin.css';

export function Organizar() {
    const [videos, setVideo] = useState([])

    const navigate = useNavigate();

    //const [dados, setDados] = useState([]);
    
    const lista = []

    const handleSave = async e => {
        e.preventDefault();
        await api.post('/select_videos_Youtube/', lista).then(response => {
            console.log(response.data);
        })
    }


    function handleInsert() {
        navigate('/admin/system')
    }

    function handleOrganizar() {
        navigate('/admin/system/organizar')
    }

    
    function handleAdmStreams() {
        navigate('/admin/system/adm-streams')
    }


    useEffect(()=> {
        api.get('/search').then(response => {
            setVideo(response.data);
        })
    }, [])

    function handleInput(id) {
        lista.push({'id_video': id})
        console.log(lista)
    }
    function handleInput2(id) {
        lista.pop({'id_video': id})
        console.log(lista)
    }
    return (
        <>
            <div className="container-admin-sistem">
                <div className="container-forms">
                    <div className="box-menu">
                        <div className="box-login">
                            <h2 id='admin-user'>Admin User</h2>
                            <p><a href="/admin/login"> Logout</a></p>
                        </div>
                        <div className="box-buttons">
                            <button onClick={handleInsert}>Inserir vídeos</button>
                            <button onClick={handleOrganizar}>Organizar</button>
                            <button onClick={handleAdmStreams}>Administrar Streams</button>
                        </div>
                    </div>
                    <div className="box-organizar-cards">
                        <div className="box-cards">
                            <form onSubmit={handleSave}>
                            {
                                videos.map(video => (
                                    <div className='card'>
                                        <img src={video.thumbnail} alt={video.title} />
                                        <p>{video.title}</p>
                                        <input type="checkbox" value='sim' onChange={(e) => {
                                            if (e.target.checked === true) {
                                                handleInput(video.id)
                                            }
                                            else {
                                                handleInput2(video.id)
                                            }
                                        }}/>
                                    </div>
                                ))
                            }
                            <button type='submit'>Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}