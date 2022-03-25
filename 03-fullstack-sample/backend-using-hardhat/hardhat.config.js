//require("@nomiclabs/hardhat-waffle");
//require('@nomiclabs/hardhat-ethers');
//require("@nomiclabs/hardhat-ganache");
//require('@openzeppelin/hardhat-upgrades');
// module.exports = {
//   solidity: "0.8.4",
//   defaultNetwork: "ganache",
//   networks: {
//     ganache: {
//       url: "http://127.0.0.1:8545",
//       gasLimit: 6000000000,
//       defaultBalanceEther: 10
//     }
//   }
// };

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    development: {
      url: "https://rinkeby.infura.io/v3/<your_project_id>",
      accounts: ['<your_wallet_private_key>'] //TestNet Wallet 01 private key
    }
  }
};