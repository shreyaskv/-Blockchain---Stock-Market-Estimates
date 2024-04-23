import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Login from './Components/Login';
import Finished from './Components/Finished';
import Connected from './Components/Connected';
import Rankings from './Components/Rankings';
import { contractAbi, contractAddress } from './Constant/constant';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for user's login status
  const [isConnected, setIsConnected] = useState(false);
  const [estimateStatus, setEstimateStatus] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [actuals, setActuals] = useState([]);
  const [provider, setProvider] = useState(null);
  const [remainingTime, setRemainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [companyid, setCompanyid] = useState('');
  const [period, setPeriod] = useState('');
  const [earnings, setEarnings] = useState('');
  const [revenue, setRevenue] = useState('');
  const [canEstimate, setCanEstimate] = useState(false);


  useEffect( () => {
    getCandidates();
    // getRemainingTime();
    // getCurrentStatus();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  });

  async function estimate() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      const tx = await contractInstance.submitForecast(companyid, period, earnings, revenue);
      await tx.wait();
    } catch (error) {
      console.error('Forecast already submitted', error);
      alert('Forecast already submitted');
    }
  }

  async function getCandidates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    const candidatesList = await contractInstance.getAllForecasts();
    const formattedCandidates = candidatesList.map((candidate, index) => {
      return {
        user: candidate.user,
        companyID: candidate.companyID,
        reportingPeriod: candidate.reportingPeriod,
        earningsEstimate: candidate.earningsEstimate,
        revenueEstimate: candidate.revenueEstimate,
      };
    });
    setCandidates(formattedCandidates);
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      canEstimate();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log('Metamask Connected : ' + address);
        setIsConnected(true);
        setIsLoggedIn(true);
        canEstimate();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error('Metamask is not detected in the browser');
    }
  }

  async function handleCompanyidChange(e) {
    setCompanyid(e.target.value);
  }

  async function handleEarningsChange(e) {
    setEarnings(e.target.value);
  }

  async function handleRevenueChange(e) {
    setRevenue(e.target.value);
  }

  async function handlePeriodChange(e) {
    setPeriod(e.target.value);
  }

  // Function to handle setting isConnected to false when Get Rankings button is clicked
  const handleGetRankings = (e) => {
    setIsConnected(false);
  };


  return (
    <div className="App">
      {estimateStatus ? (
        isConnected ? (
          <Connected
            account={account}
            candidates={candidates}
            remainingTime={remainingTime}
            companyid={companyid}
            handleCompanyidChange={handleCompanyidChange}
            period={period}
            handlePeriodChange={handlePeriodChange}
            earnings={earnings}
            handleEarningsChange={handleEarningsChange}
            revenue={revenue}
            handleRevenueChange={handleRevenueChange}
            handleGetRankings={handleGetRankings}
            estimateFunction={estimate}
            showButton={canEstimate}
            setIsConnected={setIsConnected} // Pass setIsConnected function to Connected component
          />
        ) : (
          isLoggedIn ? (
            <Rankings
              candidates = {candidates}
            />
          ) : (
            <Login connectWallet={connectToMetamask} setIsLoggedIn={setIsLoggedIn} />
          )
        )
      ) : (
        <Finished />
      )}
    </div>
  );
}

export default App;

