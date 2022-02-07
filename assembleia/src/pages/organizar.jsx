import { useEffect, useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';
import '../styles/admin.css';

export function Organizar() {
    const [videos, setVideo] = useState([])

    const navigate = useNavigate();

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
                    <div className="box-forms">
                        <h2>Organização dos vídeos</h2>
                        <div className="box-cards">
                            {
                                videos.map(video => (
                                    <div className='card'>
                                        <img src={video.thumbnail} alt={video.title} />
                                        <p>{video.title}</p>
                                        <input type="checkbox" value='sim' checked/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}