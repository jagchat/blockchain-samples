use following commands for backend-using-truffle (this is just to prove the concept in truffle, use backend-using-hardhat for this samnple)
>npm install truffle-hdwallet-provider --save
- check truffle-config.js to ensure everything is correct
>truffle deploy --network rinkeby
- grab the smart contract address

use following commands for backend-using-hardhat
>npm install
- check hardhat.config.js to ensure everything is correct
>npx hardhat run scripts/deploy.js --network development
- grab the smart contract address

front-end
- provide the smart contract address as part of src\utils\constants.js
- update src\utils\transactions.json file from backend-using-hardhat\artifacts\contracts\transactions.json
>npm install
>npm start

