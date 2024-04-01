# Hong Kong Decentralized District Councils Election System 

This is a prototype of Decentralized voting system for Hong Kong District Councils Election base on blockchain on energyweb

Technology used:
frontend: html, css, js, React, Mui
backend: node.js
blockchain: metamusk, Energy Web chain (volta testnet), hardhat, Solidity

Credit:
the backend are reference to https://www.youtube.com/watch?v=eCn6mHTpuM0

## Installation

1. First clone the repository to your local environment
```shell
git clone https://github.com/mrtaka/FTEC5520_ElectionSystem.git
```

2. After you cloned the repository, you want to install the packages using
```shell
npm install
```

3. Create an file call ".env" on the root path of the project, in .env there should have
```
API_URL = "https://volta-rpc.energyweb.org/"
PRIVATE_KEY = ""
CONTRACT_ADDRESS = ""
```

## Deploy the smart contract

You then need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

4. Install metamusk extension in your browser and create an account
https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn

5. Copy your metamusk account private to .env file.
```
PRIVATE_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

6. In metamusk extension, connect to Votla blockchain Testnet
https://www.youtube.com/watch?v=ThKW18ZZalg&t=3s

7. Before deploy the smart contract, you must have some fund in your account, go to this link and enter your address address to get free fund
https://voltafaucet.energyweb.org/

9. In deploy.js , if you want you can edit the canditate name and the election period (optional), but default there already have value.
```
const Voting_ = await Voting.deploy(["黃占永 WONG JIM WING", "黃卓謙 WONG CHEUK HIM", "鄧肇峰 Tang Siu Fung", "陳壇丹 CHAN Tan-tan"], 1440);
```

9. compile the contract and upload it to the blockchain network
```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

10. Once the contract is uploaded to the blockchain, the contract address will return in the terminal, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.
```
CONTRACT_ADDRESS = "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

11. Also remember copy the contract address and copy it in the ./src/Constant/constant.js file.
```
const contractAddress = "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
```

## Lanuch the frontend

12. Once you have pasted your private key and contract address in the .env file, simply run command to start the frontend
```shell
npm start
```
13. Go to http://localhost:3000/ with the browser that installed metamusk entension to start use the system
