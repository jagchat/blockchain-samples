import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="form-control"
    />
);

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    return (
        <>
            <div>
                From: {shortenAddress(addressFrom)},
                To: {shortenAddress(addressTo)},
                Amount: {amount} ETH,
                Message: {message},
                Timestamp: {timestamp}
            </div>
            <br />
        </>
    );
};

function Transactions() {
    const { transactions, currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };

    return (
        <>
            {currentAccount && (
                <div className="container">
                    <br />
                    <h1><span className="badge bg-secondary">TRANSACTIONS</span></h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>SEND</h3>
                                </div>
                                <div className="card-body">
                                    <br />

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p>Send to Address</p>
                                            <Input type="text" placeholder="Address To" name="addressTo" className="form-control" handleChange={handleChange} />
                                        </div>
                                        <div className="col-sm-6">
                                            <p>Enter Amount ETHER</p>
                                            <Input type="number" placeholder="0.005" className="form-control" name="amount" handleChange={handleChange} />
                                        </div>
                                        <div className="col-sm-6">
                                            <p>Enter Keyword</p>
                                            <Input type="text" placeholder="test" className="form-control" name="keyword" handleChange={handleChange} />
                                        </div>
                                        <div className="col-sm-6">
                                            <p>Enter Msg</p>
                                            <Input type="text" placeholder="test" className="form-control" name="message" handleChange={handleChange} />
                                        </div>
                                    </div><br />
                                    <center>
                                        {isLoading
                                            ? (<div>Loading..</div>)
                                            : (
                                                <button onClick={handleSubmit} className="btn btn-primary btn-lg">SEND</button>
                                            )}
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            {[...transactions].reverse().map((transaction, i) => (
                                <TransactionsCard key={i} {...transaction} />
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default Transactions;