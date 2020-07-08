import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";

//? import component
import Step from "./Step";

const Quiz = (props) => {
    const {data} = props;
    let history = useHistory()

    const [randomData,setRandomData] = useState([])
    const [counter,setCounter] = useState(-1);
    const [status,setStatus] = useState(0);
    const [left,setLeft] = useState(46);
    const [leftMobile,setleftMobile] = useState(30);
    const [choice,setChoice] = useState(0);
    const [points,setPoints] = useState(0);
    const [succ,setSuccess] = useState();
    const [failed,setFailed] = useState()

    //? for choosing a response
    const handleChoice = (e)=>{
        const i = parseInt(e.currentTarget.attributes["data-number"].value)
        setChoice(i);
    }
    useEffect(() => {
        let item = Math.floor(Math.random() * 10);
        if (item>=5){
            setRandomData(data.slice(5));
        }
        else {
            setRandomData(data.slice(0,5))
        }
        //? to pick the first 5 questions or the last 5 questions.
    }, [data]);
    const confirmQuestion = ()=>{
        if (choice !== 0){
            if (parseInt(randomData[counter+1].answer) === choice){
                setChoice(null)
                setSuccess(choice);
                setStatus(1);
                setPoints(prevState=>prevState+10)
            }
            else {
                setChoice(null)
                setFailed(choice);
                setStatus(-1);
            }
            setTimeout(()=>{
                if (counter < 3) {
                    setLeft(prevState=>prevState+90)
                    setleftMobile(prevState=>prevState+57)
                }
                else {
                    history.push({
                        pathname: '/end',
                        state: { score: points }
                    })
                }
                setCounter(prevState=>prevState+1)
                setSuccess(null);
                setFailed(null);
                setChoice(0)
            },800)
        }
    }
    return (
        <div className="_quiz">
            <div className="steps">
                {randomData.map((question,index)=>
                    <Step counter={counter} index={index} status={status} />
                    )}
            </div>
            <div className="progressBar">
                <div className="arrowProgress" style={{
                    left:`${left}px`
                }}></div>
            </div>
            <div className="progressBar mobile">
                <div className="arrowProgress" style={{
                    left:`${leftMobile}px`
                }}></div>
            </div>
            <div className="_questions">
            {
                randomData[counter+1]
                &&
                <>
                <h3>{randomData[counter+1].question}</h3>
                <div className={succ === 1?"choice succ":failed === 1?"choice failed":choice===1?"choice active":"choice"}>
                    <p onClick={handleChoice} data-number="1">{randomData[counter+1].choice1}</p>
                </div>
                <div className={succ === 2?"choice succ":failed === 2?"choice failed":choice===2?"choice active":"choice"}>
                    <p onClick={handleChoice} data-number="2">{randomData[counter+1].choice2}</p>
                </div>
                <div className={succ === 3?"choice succ":failed===3 ?"choice failed":choice===3?"choice active":"choice"}>
                    <p onClick={handleChoice} data-number="3">{randomData[counter+1].choice3}</p>
                </div>
                </>
            }
            <div className="question_action">
                <p onClick={confirmQuestion}>Confirmer</p>
            </div>
            </div>
        </div>
    );
}

export default Quiz;
