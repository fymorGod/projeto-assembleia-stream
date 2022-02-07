import logo from '../../assets/logo-assembleia.png';
import './navbar.css';

export function Navbar() {
    return (
        <div className="bar">
            <div className="logo">
                <img src={logo} alt="" />
                <div className="logo-content">
                    <p>Assembleia Legislativa do <br /> Estado do Maranhão</p>
                </div>
            </div>
            <div>
                <input type="search" name="" id="" placeholder='Pesquisar'/>
            </div>
        </div>
    )
}