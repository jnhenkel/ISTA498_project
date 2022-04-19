import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import users from '../data/data';
import store from '../data/store_local';
import apiAccess from '../communication/APIAccess';


const Login = (props) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleUsername = (event) => {
        setUsername(event.target.value);
    }
    let handlePassword = (event) => {
        setPassword(event.target.value);
    }

    let handleSubmit = (event) => {
        apiAccess.findUserInfo(email, password)
        .then(x =>{
            if (x.done) {
                alert('Login successful');
                props.userLoggedIn(email);
                navigate('/index');
            }else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(e => {
            console.log(e);
            alert('Something went wrong');
        });
        event.preventDefault();
    }

    return (
        <form id='loginForm'>
            <div className='container' id='login'>
                <h1 className='container login-header' >Login</h1>
                <div className='row login-inputs-row'>
                    <div className='row login-inputs'>
                        <label htmlFor='email' id='usernameLabel'>Email: </label>
                    </div>
                    <div className='row login-inputs'>
                        <input type='text' name='email' id='email' autoComplete='email' value={email} onChange={handleUsername}></input>
                    </div>
                    <div className='row login-inputs'>
                        <label htmlFor='password' id='passwordLabel'>Password: </label>
                    </div>
                    <div className='row login-inputs'>
                        <input type='password' name='password' id='password' autoComplete='current-password' value={password} onChange={handlePassword}></input>
                    </div>
                </div>
                <div className='row'>
                    <Button id='submitLogin' size='lg' variant='primary' onClick={handleSubmit}>&nbsp;Login&nbsp;</Button>
                </div>
            </div>
        </form>
    )
}

export default Login;