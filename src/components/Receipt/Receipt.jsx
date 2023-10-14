import { useState, useEffect } from "react";
import './Receipt.css'

const Receipt = ({fromAddress, toAddress}) =>{
       
        const [Amount, setAmount]= useState("");
        const [submitClicked, setSubmitClicked]=useState(false);

    

    return (<>
        <div className="receiptBox">
            <h1>Receipt</h1>
            
            <div className="blockBox">
                <h5>Trasaction Hash: </h5>  
                    <span>0x9874982378423792834 </span>
            
            </div>
            <div className="blockBox">
                <h5>Block Hash: </h5>  
                    <span>0x932908490238490238940892034 </span>
            </div>
            <div className="blockBox">
                <h5>Block Number: </h5>  
                    <span>10</span>
            </div>
            <div className="blockBox">
            
                <h5>From: </h5>  
                  <span>props.fromAddress</span>
            </div>
            <div className="blockBox">
            
            <h5>To: </h5>  
              <span>{toAddress}</span>
            </div>

            <div className="blockBox">
            
            <h5>From: </h5>  
              <span>{fromAddress}</span>
        </div>


                     
           

        </div>

        
    </>)
}

export default Receipt;