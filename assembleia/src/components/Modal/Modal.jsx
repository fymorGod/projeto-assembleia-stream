import { useEffect, useState } from "react";
import { api } from "../../api/app";

export function Modal({closeModal}){
    const [videos, setVideo] = useState([]);
    
    useEffect(() => {
        api.get('/search/').then(response => {
            console.log(response.data[0].title);
            setVideo(response.data);
        })
    }, [])
    return(
        <div className="modal">
            <div className="modalContainer">
                <button onClick={()=> closeModal(false)}> X </button>
                <h2>salve</h2>
            </div>
        </div>
    )
}