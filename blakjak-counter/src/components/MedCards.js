import React from 'react'

function MedCards(props) {
    return (
        <div className='thresh' onClick={() => props.incrementMed()}>
            <h3>Cards</h3> 
            <span>7</span><span>8</span><span>9</span>
            <div className='card-data'>
                <h5>showing {props.medThresh}/12 cards</h5>
                <h5 className={props.med >= 50 ? 'green' : props.med >= 15 ? 'yellow' : 'red'} >{ props.deck === 0 ? props.deck : props.med}% chance of flipping</h5>
            </div>
        </div>
    )
}

export default MedCards