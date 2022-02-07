import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { api } from "../../api/app";

export function Modal({closeModal, id_video}){
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        api.get('/search/', {
            id_video: id_video
        }).then(response => {
            setVideo(response.data);
        })
    }, [])
    
    return(
        <div className="modal">
            <div className="modalContainer">
                <button onClick={()=> closeModal(false)}> X </button>
                {
                    videos.map(video => (
                        <div>
                            <ReactPlayer url={video.link}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}