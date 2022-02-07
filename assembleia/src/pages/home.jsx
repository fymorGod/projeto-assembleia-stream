import { useEffect, useState } from "react";
import { api } from '../api/app';
import { Cronograma } from "../components/Cronograma/Cronograma";
import { Modal } from "../components/Modal/Modal";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import '../styles/home.css';

export function Home() {
    const [videos, setVideo] = useState([])
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        api.get('/search/').then(response => {
            console.log(response.data[0].title);
            setVideo(response.data);
        })
    }, [])

    const elements = document.querySelectorAll('.with-js p')
    const LIMIT = 15

    for (let p of elements){
        const aboveLimit = p.innerText.lenght > LIMIT
        const dotsOrEmpty = aboveLimit ? '...' : ''
        p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
    }

    return (
        <div className="man-content">
            <Navbar />
            <div className="box-content">
                <PlayerVideo />
                <Cronograma />
            </div>
            <div className="box-destaque">
                <div className="container-destaque">
                    <h2>Destaques</h2>
                </div>
                <div className="container-card" >
                {
                    videos.map(video => (
                        <div key={video.id} className="card" onClick={()=> {
                            setOpenModal(true);
                        }}>
                            <div>
                                <img src={video.thumbnail} alt="" />
                                <div className="with-css">
                                    <p>{video.title} </p>
                                </div>
                            </div>
                            {openModal && <Modal closeModal={setOpenModal} id_videos={video.id}/>}
                        </div>
                    ))
                }
                
                </div>                
            </div>

            <div className="box-sessoes">
                <div className="container-sessoes">
                    <h2>Sessões</h2>
                </div>
                <div className="container-card">

                {
                    videos.map(video => (
                        <div key={video.id} className="card">
                            <div>
                                <img src={video.thumbnail} alt="" />
                                <div className="with-css">
                                    <p>{video.title} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}