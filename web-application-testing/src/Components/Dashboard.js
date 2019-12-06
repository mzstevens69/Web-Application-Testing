import React from 'react';


export const Dashboard = (props) => {
// if strike press strikebutton +1, once = 3 then 1 out and reset
    const strike = () => {
    if(props.strikes === 3) {
       return (
            props.setStrike(0),
            props.setBall(0),
            props.setOut(props.outs + 1)
       )
    } else {
        return props.setStrike(props.strikes + 1)
    }         
};
//if ball then press ball button once = 4 then walk/hit and reset
    const ball = () => {
        if(props.balls === 4) {
            return (
                props.setWalk(props.walks + 1),
                props.setBall(0),
                props.setStrike(0)
                
            ) 
        } else {
            return props.setBall(props.balls +1)
        }
    };
// if foul then strike +1 unless 3 balls
    const foul = () => {
        if(props.strikes < 2) {
            return props.setStrike(props.strikes + 1)
        } else {
            return props.strikes;
        }
    }
// if hit then hit +1 
    const hit = () => {
        props.setHit(props.hits + 1)
        if(props.hits > 0) {
            return (
                props.setStrike(0),
                props.setBall(0)
            )
        } else {
            return props.hit;
        }
    }
// each onClick triggers change on display
    return (
        <div>
            <button onClick={strike}>Strike</button>
            <button onClick={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit</button>
           
        </div>

    )
}