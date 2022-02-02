import {api} from '../api/app';
import { useEffect } from 'react';
import { useState } from "react";
import { Cronograma } from "../components/Cronograma/Cronograma";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import '../styles/home.css';

export function Home() {
    const [video, setVideos] = useState([])

    const createdCard = () => {
        return (<div className="card">
            <div className="thumbnail">
                <h2>{video.map(v => {
                    <p>{v.id}</p>
                })}</h2>
            </div>
        </div>)
    }

    useEffect(() => {
        api.get('/search/').then(response => {
            // setVideos(response.data)
            console.log(response.data)
        })
    },[])

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
                    createdCard()
                }
            </div>
        </div>
    )
}