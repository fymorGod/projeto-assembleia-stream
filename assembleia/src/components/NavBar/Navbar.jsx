import logo from '../../assets/logo-assembleia.png';
import './navbar.css';

export function Navbar(){
    return (
        <div className="bar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="logo-content">
                <p>Assembleia Lesgislativa do <br/> Estado do Maranhão</p>
            </div>
        </div>
    )
}