import React from 'react';

//? import components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import QuizComponent from "../components/Quiz/Quiz"
import Book from "../components/Quiz/Book";

//? import css
import "../components/Quiz/index.css";

const Quiz = () => {
    return (
        <>
        <Header />
        <div className="_main">
            <div className="circle"></div>
            <div className="container">
                <div className="col">
                    <Book image="https://quizzito.com/main/assets/images/quiz/covers/tha3lab.jpg" title="الثعلب والأسد" />
                </div>
                <div className="col">
                    <QuizComponent />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Quiz;
