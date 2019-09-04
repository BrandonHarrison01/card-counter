import React from 'react'

function LowCards(props) {
    return (
        <div className='thresh' onClick={() => props.incrementLow()}>
            <h3>Cards</h3> 
            <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
            <div className='card-data'>
                <h5>showing {props.lowThresh}/20 cards</h5>
                <h5 className={props.low >= 50 ? 'green' : props.low >= 20 ? 'yellow' : 'red'} >{ props.deck === 0 ? props.deck : props.low}% chance of flipping</h5>
            </div>
        </div>
    )
}

export default LowCards
