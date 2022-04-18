import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import users from '../data/data';
import art from '../data/art';

/*
questions
    0
        How creative are you?
        1 (not at all), 5(very)
    1
        How organized are you?
        1 (very), 5(not at all)
    2
        How outgoing are you?
        1 (not at all), 5(very)
    3
        How easy going are you?
        1 (not at all), 5(very)
    4
        How focused are you?
        1 (very), 5(not at all)
    5
        How outdoorsy are you?
        1 (not at all), 5(very)
    6
        How often do you take on leadership roles?
        1 (never), 5(very often)
    7
        How often do you find yourself in stressful situations?
        1 (very often), 5(never)
    8
        How adventurous are you?
        1 (not at all), 5(very)
    9
        How timely are you?
        1 (very), 5(heavy procrastinator) 

answers
    0,2,3,5,8
        1 (not at all), 5(very)
    1,4
        1 (very), 5(not at all)
    6
        1 (never), 5(very often)
    7
        1 (very often), 5(never)
    9
        1 (very), 5(not at all) 
*/
const type = 'radio';

const Quiz = (props) => {
    const [questionCount, setQuestionCount] = useState(-1); /* start on -1 and set to 0 when quiz is started */
    const [userAnswer, setUserAnswer] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [artSource, setArtSource] = useState(undefined);

    let questions = [
        'How creative are you?',
        'How organized are you?',
        'How outgoing are you?',
        'How easy going are you?',
        'How focused are you?',
        'How outdoorsy are you?',
        'How often do you take on leadership roles?',
        'How often do you find yourself in stressful situations?',
        'How adventurous are you?',
        'How timely are you?'
    ];

    let handleStartQuiz = (event) => {
        event.preventDefault();
        setQuestionCount(0);
        setScore(0);
        setUserAnswer(0);
        setSubmitted(false);
    }

    let handleContinue = (event) => {
        event.preventDefault();
        setQuestionCount(questionCount + 1);
        setScore(score + userAnswer);
    }

    let handleSubmitQuiz = (event) => {
        event.preventDefault();
        if (score > 9 && score < 16) {
            var indexes = [0,1,2,3,4,5,6];
        } else if (score > 15 && score < 21) {
            var indexes = [7,8,9,10,11,12];
        } else if (score > 20 && score < 26) {
            var indexes = [13,14,15,16,17,18];
        } else if (score > 25 && score < 31) {
            var indexes = [19,20,21,22,23,24];
        } else if (score > 30 && score < 36) {
            var indexes = [25,26,27,28,29,30];
        } else if (score > 35 && score < 41) {
            var indexes = [31,32,33,34,35,36];
        } else if (score > 40 && score < 46) {
            var indexes = [37,38,39,40,41,42];
        } else {
            var indexes = [43,44,45,46,47,48,49,50];
        }
        let i = indexes[Math.floor(Math.random()* indexes.length)];
        setArtSource(art[i].url);
        setSubmitted(true);
    }

    return (
        <>
        {
            submitted ?
            <div className='container '>
                <div className='row'>
                    <div className='col art'>
            <iframe className='iframeDisplay' width="600" height="640" src={artSource}></iframe>
            </div>
            </div>
            </div>
        :
        <div className='container home'>
            
            
                {
                    questionCount != -1 && questionCount != 10 ?
                        <Form>
                            <Form.Group className='homeForm mx-auto' controlId='formBasicAnswer'>
                                <Form.Label className='quizQuestionText'>{questions[questionCount]}</Form.Label>
                            </Form.Group>
                            <div key={`inline-${type}`} className="mb-3">
                                { /* this is for the left hand quantifier for users */
                                    questionCount === 1 || questionCount === 4 || questionCount === 9 ?
                                        <Form.Check inline className='questionRange'>(very)</Form.Check>
                                        :
                                        questionCount === 6 ?
                                            <Form.Check inline className='questionRange'>(never)</Form.Check>
                                            :
                                            questionCount === 7 ?
                                                <Form.Check inline className='questionRange'>(very often)</Form.Check>
                                                :
                                                <Form.Check inline className='questionRange'>(not at all)</Form.Check>
                                }

                                <Form.Check
                                    inline
                                    label="1"
                                    name="userChoice"
                                    className="userChoice"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => setUserAnswer(1)}
                                />
                                <Form.Check
                                    inline
                                    label="2"
                                    name="userChoice"
                                    className="userChoice"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={() => setUserAnswer(2)}
                                />
                                <Form.Check
                                    inline
                                    label="3"
                                    name="userChoice"
                                    className="userChoice"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    onChange={() => setUserAnswer(3)}
                                />
                                <Form.Check
                                    inline
                                    label="4"
                                    name="userChoice"
                                    className="userChoice"
                                    type={type}
                                    id={`inline-${type}-4`}
                                    onChange={() => setUserAnswer(4)}
                                />
                                <Form.Check
                                    inline
                                    label="5"
                                    name="userChoice"
                                    className="userChoice"
                                    type={type}
                                    id={`inline-${type}-5`}
                                    onChange={() => setUserAnswer(5)}
                                />

                                {/* this is for the right hand quantifier for users */
                                    questionCount === 1 || questionCount === 4 || questionCount === 9 ?
                                        <Form.Check inline className='questionRange'>(not at all)</Form.Check>
                                        :
                                        questionCount === 6 ?
                                            <Form.Check inline className='questionRange'>(very often)</Form.Check>
                                            :
                                            questionCount === 7 ?
                                                <Form.Check inline className='questionRange'>(never)</Form.Check>
                                                :
                                                <Form.Check inline className='questionRange'>(very)</Form.Check>
                                }

                            </div>
                            <div className='row'>
                                <Button id='continueBtn' size='lg' variant='primary' onClick={handleContinue}>Continue</Button>
                            </div>
                        </Form>
                        :
                        questionCount === -1 ?
                            <>
                                <div className='row'>
                                    <div className='homeText'>To begin, we must ask you a series of questions...</div>
                                </div>
                                <Button id='startBtn' size='lg' variant='primary' onClick={handleStartQuiz}>Start Quiz</Button>
                                {/*<div className='row'>
                                <div className='reminder'>*As a reminder, you must register and login to have your art emailed to you</div>
                        </div>*/}
                            </>
                            :
                            <>
                                <div className='row'>
                                    <div className='homeText'>Thank you for taking the quiz! <br />Submit your quiz to view your art.</div>
                                </div>{score}
                                <div className='row'>
                                    <Button id='submitBtn' size='lg' variant='primary' onClick={handleSubmitQuiz}>Submit Quiz</Button>
                                </div>
                            </>
                }
            </div>
}
</>
    )
}

export default Quiz;