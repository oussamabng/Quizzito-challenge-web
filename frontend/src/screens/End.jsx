import React, { useEffect, useState } from 'react';

//? import components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Score from "../components/Score/Score"


const End = (props) => {
  const [score,setScore] = useState(0);
  useEffect(()=>{
    setScore(props.location.state.score)
  },[props.location.state.score])
    return (
        <>
          <Header />
          <Score score={score} />
          <Footer />  
        </>
    );
}

export default End;
