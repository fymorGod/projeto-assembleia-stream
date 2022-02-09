import { useEffect, useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';
import '../styles/admin.css';

export function Organizar() {
    const [videos, setVideo] = useState([])

    const navigate = useNavigate();

    const [dados, setDados] = useState('');

    const uploadData = new FormData();
    uploadData.append('id', dados);

    const handleSave = async e => {
        e.preventDefault();
        await api.post('/search_save/', uploadData).then(response => {
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

    return (
        <>
            <div className="container-admin-sistem">
                <div className="container-forms">
                    <div className="box-menu">
                        <div className="box-login">
                            <h2 id='admin-user'>Admin User</h2>
                            <p>Logout</p>
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
                                        <input type="checkbox" value='sim' onChange={() => setDados(video.id)}/>
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