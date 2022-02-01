import ReactPlayer from 'react-player';
import './playerVideo.css';

export function PlayerVideo(){
    return(
        <div className="content-video">
            <div className="title">
                <h2>Votação do Projeto</h2>
                <span>Ao Vivo</span>
            </div>
            <div className="box-videos">
                <ReactPlayer controls  width='640px' height="360px" url="https://www.youtube.com/watch?v=mu5CqEJ1e6E"/>
            </div>
        </div>
    )
}