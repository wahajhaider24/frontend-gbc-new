import React from "react";
import { useParams } from "react-router-dom";

const UserProfile= ({match}) =>{
    const params=useParams();

    const userID=params.id;
    // match.params.id;



    return(
        <>
        <div>
            <h2>User Profile</h2>
            <p>User ID: {userID}</p>
        </div>
        </>
    );
}


export default UserProfile;