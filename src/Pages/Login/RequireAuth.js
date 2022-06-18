import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(aut);
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;