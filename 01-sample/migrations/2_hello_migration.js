const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    const yourName = "Jag";
    deployer.deploy(HelloWorld, yourName);
}