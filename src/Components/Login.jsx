import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to ConsensusIQ</h1>
            <button className="login-button" onClick = {props.connectWallet}>Connect MetaMask Wallet</button>
        </div>
    )
}

export default Login;