import {api} from '../../api/app';
import ReactPlayer from 'react-player';
import './playerVideo.css';
import { useEffect } from 'react';

export function PlayerVideo(){
    useEffect(() => {
        api.get('/search/').then(response => {
            console.log(response.data)
        })
    },[])
    return(
        <div className="content-video">
            <div className="title">
                <h2>Votação do Projeto</h2>
                <span>Ao Vivo</span>
            </div>
            <div className="box-videos">
                <ReactPlayer controls  width='640px' height="360px" url="https://www.youtube.com/watch?v=sTU6MLuk8tA"/>
            </div>
        </div>
    )
}