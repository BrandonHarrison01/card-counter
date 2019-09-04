import React, { useState } from 'react';

import HighCards from './components/HighCards'
import MedCards from './components/MedCards'
import LowCards from './components/LowCards'

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
      <LowCards low={low} incrementLow={incrementLow} lowThresh={lowThresh} deck={deck} />
      <MedCards med={med} incrementMed={incrementMed} medThresh={medThresh} deck={deck} />
      <HighCards high={high} incrementHigh={incrementHigh} highThresh={highThresh} deck={deck} />
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
