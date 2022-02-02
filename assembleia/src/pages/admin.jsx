//import { Navbar } from "../components/NavBar/Navbar";
import { Navbar } from '../components/NavBar/Navbar'
import '../styles/admin.css'
export function Admin() {
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
                        <form>
                            <label htmlFor="title-video">Título do Vídeo</label>
                            <input type="text" name='title-video' id='title-video' />
                            <label htmlFor="video">Inserir o Vídeo</label>
                            <input type="file" name='video' id='video' />
                            <textarea name="description" id="description" placeholder='Descrição do vídeo'></textarea>
                            <div className="title">
                                <h2>Destaque</h2>
                            </div>
                            <div className="dest">
                                <input type="checkbox" name="destaque" value="sim" id="destaque" checked={false} onChange={e=> console.log(e.target.value)} />
                                <label htmlFor="destaque">Sim</label>

                                <input type="checkbox" name="destaque" value="nao" id="destaque" checked={false} onChange={e=> console.log(e.target.value)} />
                                <label htmlFor="destaque">Não</label>
                            </div>
                            <button>Enviar video</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}