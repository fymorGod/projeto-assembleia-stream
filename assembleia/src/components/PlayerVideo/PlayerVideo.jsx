import { api } from '../../api/app';
import ReactPlayer from 'react-player';
import './playerVideo.css';
import { useEffect, useState } from 'react';

export function PlayerVideo() {
    const [videos, setVideo] = useState([])
    useEffect(() => {
        api.get('/search/').then(response => {
            console.log(response.data)
        })
    }, [])

    useEffect(() => {
        api.get('/videos_get/').then(response => {
            console.log(response.data)
            setVideo(response.data);
        })
    }, [])
    return (
        <div className="content-video">
            <div className="title">
                <h2>Votação do Projeto</h2>
                <span>Ao Vivo</span>
            </div>
            <div className="box-videos">

                {
                    videos.map(video => (
                        <div key={video.pk} className="card">
                            <div>
                                <img src={video.thumbnail} alt="" />
                                <video src={video.video}></video>
                            </div>
                        </div>
                    ))
                }

                {/* <iframe class="jmvplayer" src="https://player.jmvstream.com/lvw/AXVGtbqMZD8whUOl9y9kRWoyQ4ehDu" allowfullscreen allow="autoplay; fullscreen" frameborder="0" width="710" height="400"></iframe> */}
            </div>
        </div>
    )
}