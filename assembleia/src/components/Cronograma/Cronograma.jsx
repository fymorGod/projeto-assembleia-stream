import { useEffect, useState } from 'react';
import { api } from '../../api/app';
import './cronograma.css';
import event from '../../assets/event.png';

export function Cronograma(){
    const [ crono, setCrono] = useState([]);

    useEffect(() => {
        api.get('/cronograma_get/').then(res => {
            setCrono(res.data)
        })
    }, [])

    return(
        <div className="cronograma-content">
           <div className="title-cronograma">
               <h2>Programação</h2>
               <img src={event} alt="cronograma" />
           </div>
           <div className="content-programacao">
                {
                    crono.map(cronos => (
                        <div>
                            <p>{cronos.title}</p>
                            <p>{cronos.date}</p>
                        </div>
                    ))
                }
           </div>
        </div>
    )
}