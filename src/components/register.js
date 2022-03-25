import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Button from 'react-bootstrap/Button';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleSubmit = (event) => {
        /*usersData.users.push({ 'firstName': firstName, 'email': email, 'password': password });*/
        alert(`Thank you for signing up! \nYou will now be redirected to the login page. `);
        navigate('/login');
        /*event.preventDefault(); */
    }

    let handleEmail = (event) => {
        let val = event.target.value;
        setEmail(val);
    }
    let handlefirstName = (event) => {
        let val = event.target.value;
        setfirstName(val);
    }
    let handlePassword = (event) => {
        let val = event.target.value;
        setPassword(val);
    }
    return (
        <div className='container' id='register'>
            <h1 className='container'></h1>
            <div className='register-text'>
                <h2>Register to enable features of our application like:</h2>
                <ul>
                    <li>Save your quiz answers so you can quickly remake art later</li>
                    <li>Get the art you make emailed directly to you</li>
                    <li>Revisit previously generated art</li>

                </ul>
            </div>
            <form id='registerForm' >
                <div className='row'>
                    <div className='row register-inputs'>
                        <label htmlFor='email' id='emailLabel'>Email: </label>
                        <input type='text' name='email' id='email' autoComplete='email' value={email} onChange={handleEmail} />
                    </div>
                    <div className='row register-inputs'>
                        <label htmlFor='firstName' id='firstNameLabel'>First Name: </label>
                        <input type='text' name='firstName' id='firstName' value={firstName} onChange={handlefirstName} />
                    </div>
                    <div className='row register-inputs'>
                        <label htmlFor='password' id='passwordLabel'>Password: </label>
                        <input type='password' name='password' id='password' autoComplete='current-password' value={password} onChange={handlePassword} />
                    </div>
                    <div className='row'>
                        <Button id='submitRegister' size='lg' variant='primary' onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration;