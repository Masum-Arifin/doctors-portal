import React from 'react';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;