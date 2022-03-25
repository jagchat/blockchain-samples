const Web3 = require("web3");

async function main() {
    // Configuring the connection to an Ethereum node
    const network = "rinkeby";
    const project_id = "<your_project_id>";
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://${network}.infura.io/v3/${project_id}`
        )
    );

    // Creating a signing account from a private key     
    const signer = web3.eth.accounts.privateKeyToAccount(
        // USING "TestNet Wallet 01, private key"
        "<your_wallet_private_key>"
    );
    web3.eth.accounts.wallet.add(signer);

    // Creating the transaction object
    const tx = {
        from: signer.address,
        to: "<your_recepient_address>", //USING "TestNEt Wallet 02" address
        value: web3.utils.toWei("0.001"),
    };
    // Assigning the right amount of gas
    tx.gas = await web3.eth.estimateGas(tx);

    // Sending the transaction to the network
    const receipt = await web3.eth
        .sendTransaction(tx)
        .once("transactionHash", (txhash) => {
            console.log(`Mining transaction ...`);
            console.log(`https://${network}.etherscan.io/tx/${txhash}`);
        });
    // The transaction is now on chain!
    console.log(`Mined in block ${receipt.blockNumber}`);
}

main();