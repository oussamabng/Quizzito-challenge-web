import React from 'react';

//? import css
import "./Footer.css"

const Footer = () => {
    return (
        <div className="_footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Quizzito</h3>
                        <p style={{
                            color:"#a7a2ce",
                            fontSize:"16px",
                            padding:"15px"
                        }}>Lis, Joue & Gagne</p>
                        <button className="action_btn primary">Acheter maintenant</button>
                    </div>
                    <div className="col">
                        <h2>
                        Devenez nos,
                        </h2>
                        <p>Partenaires</p>
                        <p>
                        Sponsor 
                        </p>
                        <p>
                        Vendeurs 
                        </p>
                    </div>
                    <div className="col">
                        <h2>
                        Social 
                        </h2>
                        <p>
                        Facebook
                        </p>
                        <p>
                        Twitter
                        </p>
                        <p>
                        Youtube
                        </p>
                        <p>
                        Instagram
                        </p>
                    </div>
                    <div className="col">
                        <h2>
                        Autres liens 
                        </h2>
                        <p>
                        Conditions d'utilisation 
                        </p>
                        <p>
                        confidentialité
                        </p>
                    </div>
                    <div className="col">
                        <button className="action_btn inverted">Aller en haut</button>
                    </div>
                </div>
                <div className="row center">
                    <div className="col">
                        <span>
                        info@quizzito.com 
                        </span>
                        <p>Conçu pour les meilleures institutions du monde. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
