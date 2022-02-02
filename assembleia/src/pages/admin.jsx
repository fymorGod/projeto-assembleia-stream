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
                    </div>
                </div>
                <div className="box-forms">
                    <form>
                        <input type="text" name='title-video' id='title-video' />
                        <label htmlFor="title-video"></label>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}