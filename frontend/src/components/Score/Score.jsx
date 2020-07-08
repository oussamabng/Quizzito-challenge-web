import React from 'react'

//? import css
import "./Score.css";

export default function Score(props) {
    const {score} = props
    return (
        <div className="_main score">
            <div className="circle"></div>
            <div className="container">
                <div className="col">
                    <p>Votre score finale est de</p>
                    <h3>{score}</h3>
                    <div className="score_action">
                        <a href="/" className="action_btn inverted">ESSAYER UN AUTRE QUIZ</a>
                        <p  className="action_btn primary">S'INSCRIRE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
