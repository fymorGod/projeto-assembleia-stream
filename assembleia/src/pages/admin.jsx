import { useState } from 'react';
import { api } from '../api/app';
import { Navbar } from '../components/NavBar/Navbar'
import '../styles/admin.css'
export function Admin() {

    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [destaque, setDestaque] = useState('');

    const headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    const handleCreatedVideo = async e => {
        e.preventDefault();
        await api.post('/videos_post/',{
            title: title,
            file: {"name": "luiz"},
            description: description,
            destaque: destaque
        }, headers).then(response => {
            console.log(response.data);
        })

        console.log(file)
    }
    return (
        <>
            <Navbar />
            <div className="container-admin-sistem">
                <div className="container-forms">
                    <div className="box-menu">
                        <div className="box-login">
                            <h2 id='admin-user'>Admin User</h2>
                            <p>Logout</p>
                        </div>
                        <div className="box-buttons">
                            <button>Inserir vídeos</button>
                            <button>Organizar</button>
                            <button>Administrar Streams</button>
                        </div>
                    </div>
                    <div className="box-forms">
                        <form onSubmit={handleCreatedVideo}>
                            <label htmlFor="title-video">Título do Vídeo</label>
                            <input type="text" name='title-video' id='title-video' onChange={e => setTitle(e.target.value)} />
                            <label htmlFor="video">Inserir o Vídeo</label>
                            <input type="file" name='video' id='video' onChange={e => setFile(e.target.files[0])} />
                            <textarea name="description" id="description" placeholder='Descrição do vídeo' onChange={e => setDescription(e.target.value)}></textarea>
                            <div className="title">
                                <h2>Destaque</h2>
                            </div>
                            <div className="dest">
                                <input type="checkbox" name="destaque" value="sim" id="destaque" onChange={e=> setDestaque(e.target.value)} />
                                <label htmlFor="destaque">Sim</label>

                                <input type="checkbox" name="destaque" value="nao" id="destaque" onChange={e=> setDestaque(e.target.value)} />
                                <label htmlFor="destaque">Não</label>
                            </div>
                            <button type="submit">Enviar video</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}