import React, { useState } from 'react';
import SignIn from "./components/SignIn";
import './App.css'; // Import the CSS file for styling

function App() {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedBlockchain, setSelectedBlockchain] = useState('ethereum');

  const handleAddressChange = (event) => {
    setInputAddress(event.target.value);
  };

  const handleBlockchainChange = (event) => {
    setSelectedBlockchain(event.target.value);
  };

  const handleButtonClick = () => {
    // Do something with the inputAddress and selectedBlockchain
    console.log(`Address: ${inputAddress}, Blockchain: ${selectedBlockchain}`);
  };

  return (
      <div className="container">
        {/*<select className="selector" value={selectedBlockchain} onChange={handleBlockchainChange}>*/}
        {/*  <option value="ethereum">Ethereum</option>*/}
        {/*  <option value="bsc">Binance Smart Chain</option>*/}
        {/*</select>*/}

        {/*<div className="input-container">*/}
        {/*  <input*/}
        {/*      type="text"*/}
        {/*      value={inputAddress}*/}
        {/*      onChange={handleAddressChange}*/}
        {/*      placeholder="Enter blockchain address..."*/}
        {/*      className="address-input"*/}
        {/*  />*/}
        {/*  <button onClick={handleButtonClick} className="button">*/}
        {/*    Click me*/}
        {/*  </button>*/}
        {/*</div>*/}
          <SignIn/>
      </div>
  );
}

export default App;
