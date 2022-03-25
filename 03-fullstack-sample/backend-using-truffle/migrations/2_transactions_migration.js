const Transactions = artifacts.require("Transactions");

module.exports = function (deployer) {
    const account = "0x096970b12BE76ce8F9cA702F8EC406fEDF1732a7"; //"TestNet Wallet 01" address
    deployer.deploy(Transactions, {from: account});
}