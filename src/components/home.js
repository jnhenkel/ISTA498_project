import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import users from '../data/data';

const Home = () => {
    return (
        <div className='container home'>
            <div className='row'>
                <div className='homeText'>Before we begin, we must ask you a question...</div>
            </div>
            <Form>
                <Form.Group className='homeForm mx-auto' controlId='formBasicAnswer'>
                    <Form.Label>What type of a person are you?</Form.Label>
                    <Form.Control className='homeFormControl' as='textarea' placeholder='' rows={3} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Home;