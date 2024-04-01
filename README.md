# Decentralized District Councils Election System 

This is a prototype of Decentralized District Councils Election System base on blockchain

Technology used:
frontend: html, css, js, React, Mui
backend: node.js
blockchain: metamusk, Energy Web chain (volta testnet), hardhat, Solidity

Credit:
the backend are reference to https://www.youtube.com/watch?v=eCn6mHTpuM0

## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

```
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

https://voltafaucet.energyweb.org/

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```
