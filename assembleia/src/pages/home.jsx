import { useEffect, useState } from "react";
import { api } from '../api/app';
import { Cronograma } from "../components/Cronograma/Cronograma";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import '../styles/home.css';

export function Home() {
    const [videos, setVideo] = useState([])


    useEffect(() => {
        api.get('/search/').then(response => {
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
                <div className="container-card">
                    {
                        videos.map((item, index) => {
                            return (
                                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index} >
                                    <div class="card p-0 overflow-hidden h-100 shadow" style="width: 18rem;">
                                        <img src={item.thumbnail} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <button className="btn btn-primary" onClick={() => getData()}>Click me</button>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>

            <div className="box-sessoes">
                <div className="container-sessoes">
                    <h2>Sessões</h2>
                </div>
                <div className="container-card">

                    {
                        videos.map(video => (
                            <div key={video.id} className="card">
                                <div>
                                    <img src={video.thumbnail} alt="" />
                                    <div className="with-css">
                                        <p>{video.title} </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}