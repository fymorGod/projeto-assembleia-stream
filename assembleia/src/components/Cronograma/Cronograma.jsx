import { useEffect, useState } from 'react';
import { api } from '../../api/app';
import './cronograma.css';

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