import React,{useState} from 'react'
import { useEffect } from 'react';

export default function Step(props) {
    const [imageSrc,setImageSrc] = useState("https://quizzito.com/main/assets/images/quiz/emptyemoji.png")
    const {counter,status,index} = props;
    useEffect(()=>{
        console.log({counter,index})
        if (counter === index){
            if (imageSrc !== "https://quizzito.com/main/assets/images/quiz/sademoji.png" || imageSrc !== "https://quizzito.com/main/assets/images/quiz/happyemoji.png"){
                if (status === 1){
                    setImageSrc("https://quizzito.com/main/assets/images/quiz/happyemoji.png")
                }
                else if (status === -1){
                    setImageSrc("https://quizzito.com/main/assets/images/quiz/sademoji.png");
                }
            }
        }
    },[counter])
    //? 0 means default , 1 mean good response , -1 means bad response 
    return (
        <div className="step_img">
            <img  src={imageSrc} alt="img"/>
        </div>
    )
}
