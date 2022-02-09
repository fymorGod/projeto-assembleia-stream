import { useEffect, useState } from "react";
import { api } from '../api/app';
import { Cronograma } from "../components/Cronograma/Cronograma";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import { Model } from "./Model";
import { Model2 } from "./Model2";

import '../styles/home.css';

export function Home() {
    const [videos, setVideo] = useState([])


    useEffect(() => {
        api.get('/search_get_videos_Yt/').then(response => {
            console.log(response.data[0].title);
            setVideo(response.data);
        })
    }, [])

    const elements = document.querySelectorAll('.with-js p')
    const LIMIT = 15

    for (let p of elements) {
        const aboveLimit = p.innerText.lenght > LIMIT
        const dotsOrEmpty = aboveLimit ? '...' : ''
        p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
    }

    const [model, setModel] = useState(false)
    const [tempData, setTempData] = useState([])

    const getData = (img, title, desc) => {
        let tempData = [img, title, desc];
        setTempData(item => [1, ...tempData]);

        return setModel(true);
    }

    const [model2, setModel2] = useState(false)
    const [tempData2, setTempData2] = useState([])

    const getData2 = (img, title, desc) => {
        let tempData2 = [img, title, desc];
        setTempData2(item => [1, ...tempData2]);

        return setModel2(true);
    }

    return (
        <div className="man-content">
            <Navbar />
            <div className="box-content">
                <PlayerVideo />
                <Cronograma />
            </div>
            <div className="box-destaque">
                <div className="container-destaque">
                    <h2>Destaques</h2>
                </div>
                {
                    model === true ? <Model desc={tempData[3]} hide={() => setModel(false)} /> : ''
                }
                <section className="section-one">
                    <div className="box-card">
                        {
                            videos.map((item) => (
                                <div className="crd" key={item.id} >
                                    <div className="">
                                        <img src={item.thumbnail} />
                                        <div className="with-css">
                                            <p>{item.title}</p>
                                            <button onClick={() => getData(item.thumbnail, item.title, item.link)}>Ver mais</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>


            </div>
            <div className="box-sessoes">
                <div className="container-sessoes">
                    <h2>Sessões</h2>
                </div>
                {
                    model2 === true ? <Model desc={tempData2[3]} hide={() => setModel2(false)} /> : ''
                }
                <section className="section-one">
                    <div className="box-card">
                        {
                            videos.map((item) => (
                                <div className="crd" key={item.id} >
                                    <div className="">
                                        <img src={item.thumbnail} />
                                        <div className="with-css">
                                            <p>{item.title}</p>
                                            <button onClick={() => getData2(item.thumbnail, item.title, item.link)}>Ver mais</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

            </div>
        </div>
    )
}