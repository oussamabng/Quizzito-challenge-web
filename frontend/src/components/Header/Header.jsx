import React,{useState} from 'react'

//? import css
import "./Header.css";

const Header = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const handleMenu = ()=>{
        setIsOpen(prevState=>!prevState);
    }
    return (
        <div className="_header">
            <div className="container">
                <a href="/">
                    <h3>
                        <img src="https://quizzito.com/main/assets/images/quizzito_logo_nerd.png" alt="logo"/>
                        Quizzito
                    </h3>
                </a>
                <ul>
                    <li>
                        <a href="#">Fonctionnalités</a>
                    </li>
                    <li>
                        <a href="#">Clients</a>
                    </li>
                    <li>
                        <a href="#">Pour Familles
                        <span className="badge">
                        Nouv.
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Cadeaux</a>
                    </li>
                    <li>
                        <a href="#" className="action_btn inverted">Se connecter</a>
                    </li>
                    <li>
                        <a href="#" className="action_btn primary">S'inscrire</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://quizzito.com/main/assets/images/whats.png" alt="whats"/>
                        </a>
                    </li>
                </ul>
                <div className="mobile_toggle">
                <a href="#" style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                     <img src="https://quizzito.com/main/assets/images/whats.png" alt="whats"/>
                </a>
                <button className="toggle" onClick={handleMenu}>
                <i class="fa fa-bars"></i>
                </button>
                   <div className={isOpen?"menu_mobile":"menu_mobile closed"}>
                        <ul>
                    <li>
                        <a href="#">Fonctionnalités</a>
                    </li>
                    <li>
                        <a href="#">Clients</a>
                    </li>
                    <li>
                        <a href="#">Pour Familles
                        <span className="badge">
                        Nouv.
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Cadeaux</a>
                    </li>
                    <li>
                        <a href="#" className="action_btn inverted">Se connecter</a>
                    </li>
                    <li>
                        <a href="#" className="action_btn primary">S'inscrire</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://quizzito.com/main/assets/images/whats.png" alt="whats"/>
                        </a>
                    </li>
                </ul>
               
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Header;