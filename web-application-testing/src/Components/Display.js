import React from 'react';

export const Display = props => {
// keeps count for balls and strikes
    return (
        <div>
            <h3>Strikes</h3>
            <div>{props.strikes}</div>
            <h3>Balls</h3>
            <div>{props.balls}</div>
            <h3>Hits</h3>
            <div>{props.hits}</div>
            <h3>Walks</h3>
            <div>{props.walks}</div>
            <h3>Strikeout         </h3>
            <div>{props.outs}</div>


        </div>
    )
}