import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const status = JSON.parse(sessionStorage.getItem('user')).status

    return (  
        <>
            {
                !!sessionStorage.user ? (children) : (<Navigate to="/login" />)
            }
            {
                status === "ban" ? (<Navigate to="/banned" />) : ""
            }
        </>
    );
}

export default PrivateRoute;