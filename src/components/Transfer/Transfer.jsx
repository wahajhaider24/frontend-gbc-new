import { useState, useEffect } from "react";

import Receipt from "../Receipt/Receipt";
import './Transfer.css'

const Transfer = () =>{
        const [fromAddress, setfromAddress]= useState("");
        const [toAddress, setToAddress]= useState("");
        const [Amount, setAmount]= useState("");
        const [submitClicked, setSubmitClicked]=useState(false);

        console.log(fromAddress);

    return (<>
        <div className="receiptBox">
            <h1>Transfer</h1>
            
            <div className="fromBox">
                <h5>From: </h5>  
                    <input className="fromBoxInput" placeholder="Enter Address"  onChange={(e)=>{
                        setfromAddress(e.target.value);
                     }}></input>
            
            </div>
            <div className="fromBox">
            
                    <h5>To: </h5>  
                        <input className="fromBoxInput" placeholder="Enter Address"  onChange={(e)=>{
                             setToAddress(e.target.value);
                         }}></input>
            
                
            </div>
            <div className="fromBox">
            
                <h5>Amount: </h5>  
                  <input className="fromBoxInput" placeholder="Enter Amount"  onChange={(e)=>{
                     setAmount(e.target.value);
                     }}></input>
            </div>
                     
            <button onClick={()=>{
                setSubmitClicked(true);
            }}>Submit</button>

        </div>
        {submitClicked ? <Receipt fromAddress={fromAddress} toAddress={toAddress}></Receipt> : <></>}
       


    </>)
}

export default Transfer;