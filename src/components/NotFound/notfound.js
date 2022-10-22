import React from 'react';
import { Navigate } from 'react-router-dom';

function NotFound() {
    return(
        <Navigate to="/"></Navigate>
    )
}

export default NotFound;