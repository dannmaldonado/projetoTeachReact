import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}) {
    const user = true;

    return user ? children : <Navigate to="/login" />
}


// export function PrivateRoute({children}) {
//     const user = userLogin => {
//         if (userLogin === true){
//             console.log(user);
//         }
//         return user ? children : <Navigate to="/login" />
//     }
// }