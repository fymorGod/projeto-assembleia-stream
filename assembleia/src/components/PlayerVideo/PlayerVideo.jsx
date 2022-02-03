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
            <iframe class="jmvplayer" src="https://player.jmvstream.com/lvw/AXVGtbqMZD8whUOl9y9kRWoyQ4ehDu" allowfullscreen allow="autoplay; fullscreen" frameborder="0" width="710" height="400"></iframe>
            </div>
        </div>
    )
}