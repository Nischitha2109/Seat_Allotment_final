// import React from 'react'

// export const Studenthome = () => {
//   return (
//     <div>Studenthome
//       <Copyright/>
//     </div>
//   )
// }
// export default Studenthome

import Copyright from './Copyright'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studenthome = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Make GET request to fetch user details
                const response = await axios.get('/api/details'); // Adjust the URL as per your backend route
                setUser(response.data.user);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user details:', error);
                setError('An error occurred while fetching user details.');
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <div>
            <h2>User Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/* Add more user details as needed */}
                </div>
            )}
            <Copyright/>
        </div>
    );
};

export default Studenthome;

