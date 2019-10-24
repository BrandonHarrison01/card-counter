import React from 'react'

function HighCards(props) {
    return (
        <div className='thresh' onClick={() => props.incrementHigh()} >
            <h3>Cards</h3> 
            <span>10</span><span>J</span><span>Q</span><span>K</span><span>A</span>
            <div className='card-data'>
                <h5>showing {props.highThresh}/20 cards</h5>
                <h5 className={props.high >= 50 ? 'green' : props.high >= 20 ? 'yellow' : 'red'} >
                    { props.deck === 0 ? props.deck : props.high}% chance of flipping
                </h5>
            </div>
        </div>
    )
}

export default HighCards
