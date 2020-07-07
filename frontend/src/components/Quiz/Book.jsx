import React from 'react';


const Book = (props) => {
    const {title,image} = props;
    return (
        <div className="_book_quiz card">
            <div className="body">
                <span>Vous êtes en train de jouer...</span>
                <h4>{title}</h4>
                <img src={image} alt="image"/>
            </div>
        </div>
    );
}

export default Book;
