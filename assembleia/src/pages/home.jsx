import { Cronograma } from "../components/Cronograma/Cronograma";
import { Navbar } from "../components/NavBar/Navbar";
import { PlayerVideo } from "../components/PlayerVideo/PlayerVideo";
import ReactPlayer from "react-player";
import '../styles/home.css';

export function Home() {
    return (
        <div>
            <Navbar />
            <div className="box-content">
                <PlayerVideo />
                <Cronograma />
            </div>
            <div className="box-destaque">
                <div className="container-destaque">
                    <h2>Destaques</h2>
                    <div className="content-sessoes">
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="box-sessoes">
                <div className="container-sessoes">
                    <h2>Sessões</h2>
                    <div className="content-sessoes">
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                        <div className="cards-videos">
                            <ReactPlayer width='120px' height="80px" controls url="https://www.youtube.com/watch?v=mu5CqEJ1e6E" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}