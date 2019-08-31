import React, { useState } from 'react';
import './App.scss';

function App() {

  const [deck, setDeck] = useState(52)
  const [lowThresh, setLowThresh] = useState(0)
  const [medThresh, setMedThresh] = useState(0)
  const [highThresh, setHighThresh] = useState(0)

  const incrementLow = () => {
    if (lowThresh < 20) {
      setLowThresh(lowThresh + 1)
      setDeck(deck - 1)}
  }

  const incrementMed = () => {
    if (medThresh < 12) {
      setMedThresh(medThresh + 1)
      setDeck(deck - 1)
    }
  }

  const incrementHigh = () => {
    if (highThresh < 20) {
      setHighThresh(highThresh + 1)
      setDeck(deck - 1)
    }
  }

  const reset = () => {
    setLowThresh(0)
    setMedThresh(0)
    setHighThresh(0)
    setDeck(52)
  }

  const low = Math.round((20 - lowThresh) / deck * 100)
  const med = Math.round((12 - medThresh) / deck * 100)
  const high = Math.round((20 - highThresh) / deck * 100)

  return (
    <div className="app">
      <h1><span className={deck > 40 ? 'green' : deck > 20 ? 'yellow' : 'red' }>{deck}</span> cards remaining</h1>
      <div className='thresh' onClick={() => incrementLow()}>
        <h3>Cards</h3> 
        <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
        <div className='card-data'>
          <h5>showing {lowThresh}/20 cards</h5>
          <h5 className={low >= 50 ? 'green' : low >= 20 ? 'yellow' : 'red'} >{ deck === 0 ? deck : low}% chance of flipping</h5>
        </div>
      </div>
      <div className='thresh' onClick={() => incrementMed()}>
        <h3>Cards</h3> 
        <span>7</span><span>8</span><span>9</span>
        <div className='card-data'>
          <h5>showing {medThresh}/12 cards</h5>
          <h5 className={med >= 50 ? 'green' : med >= 15 ? 'yellow' : 'red'} >{ deck === 0 ? deck : med}% chance of flipping</h5>
        </div>
      </div>
      <div className='thresh' onClick={() => incrementHigh()} >
        <h3>Cards</h3> 
        <span>10</span><span>J</span><span>Q</span><span>K</span><span>A</span>
        <div className='card-data'>
          <h5>showing {highThresh}/20 cards</h5>
          <h5 className={high >= 50 ? 'green' : high >= 20 ? 'yellow' : 'red'} >{ deck === 0 ? deck : high}% chance of flipping</h5>
        </div>
      </div>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
