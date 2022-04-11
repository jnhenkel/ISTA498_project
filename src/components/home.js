import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import users from '../data/data';
/*
How creative are you?
1 (not at all), 5(very)
How organized are you?
1 (very), 5(not all)
How outgoing are you?
1 (not at all), 5(very)
How easy going are you?
1 (not at all), 5(very)
How focused are you?
1 (very), 5(not at all)
How outdoorsy are you?
1 (not at all), 5(very)
How often do you take on leadership roles?
1 (never), 5(very often)
How often do you find yourself in stressful situations?
1 (very often), 5(never)
How adventurous are you?
1 (not at all), 5(very)
How timely are you?
1 (very), 5(heavy procrastinator) 

*/
const type = 'radio';

const Home = () => {
    return (
        <div className='container home'>
            <div className='row'>
                <div className='homeText'>To begin, we must ask you a series of questions...</div>
            </div>
            <Form>
                <Form.Group className='homeForm mx-auto' controlId='formBasicAnswer'>
                    <Form.Label>How creative are you?</Form.Label>
                </Form.Group>
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline className='questionRange'>(not at all)</Form.Check>
                <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                />
                <Form.Check
                    inline
                    label="5"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                />
                <Form.Check inline className='questionRange'>(very)</Form.Check>
            </div>
            </Form>
        </div>
    )
}

export default Home;