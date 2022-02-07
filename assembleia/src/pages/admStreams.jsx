import { useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';
import '../styles/admin.css'

export function AdmStreams() {

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    
    const uploadData = new FormData();

    uploadData.append('title', title)
    uploadData.append('date', date)

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


    const handleCreatedVideo = async e => {
        e.preventDefault();
        await api.post('/videos_post/', uploadData).then(response => {
            console.log(response.data);
        })
    }


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
                        <form onSubmit={handleCreatedVideo}>
                            <label htmlFor="title">Título da Stream</label>
                            <input type="text" placeholder='Inserir o titulo da stream' name='title' id='title' onChange={e => setTitle(e.target.value)} />
                            <label htmlFor="video">Inserir a data </label>
                            <input type="datetime-local" name='date' id='date' onChange={e => setDate(e.target.value)} />
                            <button type="submit">Enviar cronograma</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}