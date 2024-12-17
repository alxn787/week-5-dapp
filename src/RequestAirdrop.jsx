import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";


export function RequestAirdrop(){
    const wallet = useWallet();
    const { connection } = useConnection();


    function requestAirdrop(){
        const publickey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publickey, amount*LAMPORTS_PER_SOL)
    }
    return(
        <div>
            <input id ="amount" placeholder="Airdrop amount" type="text"></input>
            <button onClick={requestAirdrop}>Send Airdrop</button>
            <div>
            {wallet.publicKey?.toBase58()}
            </div>
        </div>
    );
}