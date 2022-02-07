import { useState } from 'react';
import { api } from '../api/app';
import { useNavigate } from 'react-router';
import '../styles/admin.css'

export function Admin() {

    const [title, setTitle] = useState('');
    const [file, setFile] = useState();
    const [description, setDescription] = useState('');
    const [destaque, setDestaque] = useState('');
    
    const uploadData = new FormData();

    uploadData.append('title', title)
    uploadData.append('file', file)
    uploadData.append('description', description)
    uploadData.append('destaque', destaque)


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

        console.log(file.name)
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
                            <label htmlFor="title-video">Título do Vídeo</label>
                            <input type="text" placeholder='Inserir o video' name='title-video' id='title-video' onChange={e => setTitle(e.target.value)} />
                            <label htmlFor="video">Inserir o Vídeo</label>
                            <input type="file" name='video' id='video' onChange={e => setFile(e.target.files[0])} />
                            <textarea name="description" id="description" placeholder='Descrição do vídeo' onChange={e => setDescription(e.target.value)}></textarea>
                            <div className="title">
                                <h2>Destaque</h2>
                            </div>
                            <div className="dest">
                                <input  type="radio" name="destaque" value="sim" id="destaque1" onChange={e=> setDestaque(e.target.value)} />
                                <label htmlFor="destaque1">Sim</label>

                                <input type="radio" name="destaque" value="nao" id="destaque2" onChange={e=> setDestaque(e.target.value)} />
                                <label htmlFor="destaque2">Não</label>
                            </div>
                            <button type="submit">Enviar video</button>
                            <a href='/admin/register' >Esqueci minha senha</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}