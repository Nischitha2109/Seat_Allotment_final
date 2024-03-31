import React, { useState } from 'react'
import './Studentlogin.css'
import Axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom';
import Copyright from './Copyright'

export const Studentlogin = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/Studentlogin', { username, email, password }, { withCredentials: true }).then(response => {
            if (response.data.status) {
                navigate('/Studenthome');
            } else {
                // Display error message from the backend as alert
                alert('Invalid username or password');
            }
        }).catch(err => {
            console.log(err)
            setErrorMessage('An error occurred. Please try again later.');
        })
    };
    return (
        <div className="student-hero">
            <div className='studentlogin-container'>
                <form className='studentlogin-form' onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: 'center' }}>Student Login</h2>
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" autoComplete='off' placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder='*******'
                        onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>Login</button>
                </form>
                <Copyright />
            </div>
        </div>
    )
}
export default Studentlogin