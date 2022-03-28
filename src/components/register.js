import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Button from 'react-bootstrap/Button';
import users from '../data/data';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleSubmit = (event) => {
        if (validateInputs(email, 'email') && validateInputs(firstName, 'name') && validateInputs(password, 'password')) {
            users.push({ 'firstName': firstName, 'email': email, 'password': password });
            console.log(users);
            alert(`Thank you for signing up! \nYou will now be redirected to the login page. `);
            navigate('/login');
        }
    }
    let handleEmail = (event) => {
        let val = event.target.value;
        const nameDiv = document.getElementById('emailDiv');
        nameDiv.setAttribute('style', 'border: 0');
        setEmail(val);
    }
    let handlefirstName = (event) => {
        let val = event.target.value;
        const nameDiv = document.getElementById('nameDiv');
        nameDiv.setAttribute('style', 'border: 0');
        setfirstName(val);
    }
    let handlePassword = (event) => {
        let val = event.target.value;
        const nameDiv = document.getElementById('passwordDiv');
        nameDiv.setAttribute('style', 'border: 0');
        setPassword(val);
    }
    let validateInputs = (value, type) => {
        if (type == 'email') {
            /* empty value check */
            if (!value) {
                alert('Please enter an email');
                const nameDiv = document.getElementById('emailDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            /* this regex also prevents multiple @ symbols being used in addition to email validation. This regex will return an object if value is true email format. */
            if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                alert('Invalid email');
                return false;
            }
        } else if (type == 'name') {
            /* empty value check */
            if (!value) {
                alert('Please enter a name');
                const nameDiv = document.getElementById('nameDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            if (value.match(/[0-9]/)) {
                alert('Invalid name');
                return false;
            }
        } else if (type == 'password') {
            /* empty value check */
            if (!value) {
                alert('Please enter a password');
                const nameDiv = document.getElementById('passwordDiv');
                nameDiv.setAttribute('style', 'border: 3px solid red');
                return false;
            }
            if (value.length < 5) {
                alert('Password length is too short');
                return false;
            }
        }
        return true;
    }
    return (
        <div className='container' id='register'>
            <h1 className='container'></h1>
            <div className='register-text'>
                <h2>Register to enable features of our application like:</h2>
                <ul>
                    <li>Save your quiz answers so you can quickly remake art</li>
                    <li>Get the art you make emailed directly to you</li>
                    <li>Revisit previously generated art</li>

                </ul>
            </div>
            <div id='registerForm'>
                <form>
                    <div className='row register-inputs-parent'>
                        <div className='row register-inputs' id='emailDiv'>
                            <label htmlFor='email' id='emailLabel'>Email: </label>
                            <input type='text' name='email' id='email' autoComplete='email' value={email} onChange={handleEmail} />
                        </div>
                        <div className='row register-inputs' id='nameDiv'>
                            <label htmlFor='firstName' id='firstNameLabel'>First Name: </label>
                            <input type='text' name='firstName' id='firstName' value={firstName} onChange={handlefirstName} />
                        </div>
                        <div className='row register-inputs' id='passwordDiv'>
                            <label htmlFor='password' id='passwordLabel'>Password: </label>
                            <input type='password' name='password' id='password' autoComplete='current-password' value={password} onChange={handlePassword} />
                        </div>
                        <div className='row'>
                            <Button id='submitRegister' size='lg' variant='primary' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;