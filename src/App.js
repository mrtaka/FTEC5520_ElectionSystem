import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import {contractAbi, MulticontractAddress} from './Constant/constant';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Finished from './Components/Finished';
import Connected from './Components/Connected';
import Result from './Components/Result';
import Footer from './Components/footer';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box, Typography, Link } from "@mui/material";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);

  // const [votingStatus, setVotingStatus] = useState(true);
  // const [remainingTime, setremainingTime] = useState('');
  // const [candidates, setCandidates] = useState([]);

  const [votingStatus, setVotingStatus] = useState([true,true]);
  const [remainingTime, setremainingTime] = useState(['','']);
  const [candidates, setCandidates] = useState([[],[]]);


  useEffect( () => {
    for (let i = 0; i < MulticontractAddress.length; i++) {
      getCandidates(MulticontractAddress[i],i);
      getRemainingTime(MulticontractAddress[i],i);
      getCurrentStatus(MulticontractAddress[i],i);
    }
    console.log("votingStatus: ",votingStatus)
    console.log(remainingTime)
    console.log(candidates)
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  });


  async function vote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        MulticontractAddress[0], contractAbi, signer
      );

      const tx = await contractInstance.vote(number);
      await tx.wait();
      canVote();
  }


  async function canVote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        MulticontractAddress[0], contractAbi, signer
      );
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);
  }

  async function getCandidates(InputcontractAddress,index) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        InputcontractAddress, contractAbi, signer
      );
      const candidatesList = await contractInstance.getAllVotesOfCandiates();
      // console.log(candidatesList);
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          voteCount: candidate.voteCount.toNumber()
        }
      });
      // setCandidates(prev => [...prev, formattedCandidates]);
      candidates[index] = formattedCandidates
      setCandidates(candidates);
  }

  async function getRemainingTime(InputcontractAddress,index) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract (
      InputcontractAddress, contractAbi, signer
    );
    const time = await contractInstance.getRemainingTime();
    // setremainingTime(prev => [...prev, parseInt(time, 16)]);
    remainingTime[index] = time;
    setremainingTime(remainingTime);
}


  async function getCurrentStatus(InputcontractAddress,index) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        InputcontractAddress, contractAbi, signer
      );
      const status = await contractInstance.getVotingStatus();
      // console.log(status);
      // setVotingStatus(prev => [...prev, status]);
      votingStatus[index] = status
      setVotingStatus(votingStatus);
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      canVote();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        canVote();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Cannot login to the Election Blockchain")
      console.error("Metamask is not detected in the browser")
    }
  }

  async function handleNumberChange(selectIndex) {
    setNumber(selectIndex);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path="/" element={ isConnected ? ( votingStatus[0] ? 
              <Connected 
                account = {account}
                candidates = {candidates[0]}
                remainingTime = {remainingTime[0]}
                number= {number}
                handleNumberChange = {handleNumberChange}
                voteFunction = {vote}
                showButton = {CanVote}
              />
              : 
              <Finished />) 
              :
              <Login connectWallet = {connectToMetamask}/>} 
          />
      
          <Route path="/result" element={<Result 
            remainingTime = {remainingTime} 
            candidates = {candidates}
            />} 
          />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );



}





export default App;
