import { useEffect, useState } from "react";
import { api } from '../api/app';
import { Cronograma } from "../components/Cronograma/Cronograma";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import '../styles/home.css';

export function Home() {
    const [videos, setVideo] = useState([])

    useEffect(() => {
        api.get('/search/').then(response => {
            console.log(response.data[0].title);
            setVideo(response.data);
        })
    }, [])

    const createdCard = () => {
        return (<div>

        </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="box-content">
                <PlayerVideo />
                <Cronograma />
            </div>
            <div className="box-destaque">
                <div className="container-destaque">
                    <h2>Destaques</h2>
                </div>
                <div className="card">
                    <div className="thumbnail">
                        <h2>aqui vai a imagem</h2>
                    </div>
                </div>
            </div>

            <div className="box-sessoes">
                <div className="container-sessoes">
                    <h2>Sessões</h2>
                </div>
                {
                    videos.map(video => (
                        <div key={video.id} className="card">
                            <div>
                                <p>{video.title} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}