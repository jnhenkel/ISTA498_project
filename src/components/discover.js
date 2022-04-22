import { React, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import apiAccess from "../communication/APIAccess";

const Discover = (props) => {
    const [artIndex, setArtIndex] = useState(undefined);
    const [scoresArray, setScoresArray] = useState(undefined);

    let location = useLocation(); //gets state
    //console.log('from discover scoresArray: ', scoresArray);

    let navigate = useNavigate();

    useEffect(() => {
        if (location.state.user) {
            apiAccess.getScore(location.state.user)
                .then(x => {
                    if (x.done) {
                        //alert(x.message);
                        setScoresArray(x.result);
                    } else {
                        //alert(x.message);
                    }
                })
        }
    }, [location.state.user])

    var scoresRender;

    useEffect(() => {
        if (!scoresArray) {
            return
        }

        if (scoresArray && location.state.user) {
            scoresRender = scoresArray.map(entry => {
                return (
                    <tr>
                        <td>{entry.score}</td>
                        <td>{entry.date}</td>
                        <td><a href={entry.art_url} target="_blank">{entry.art_url}</a></td>
                    </tr>
                )

            });
            setArtIndex(scoresRender);
            //console.log('scores render: ',scoresRender);
        }
    }, [scoresArray])

    return (
        <div className="container drawDiv">
            {
                location.state.user ?
                    <>
                        {
                            artIndex ?

                                <div className="previousArt">
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Score</th>
                                                <th>Date Taken</th>
                                                <th>Art Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {artIndex}
                                        </tbody>
                                    </Table>
                                </div>
                                :
                                <div className="container loginPrompt ">
                                    <div className='row'>
                                        <div className='homeText'>You have no previous quiz submissions! <br />After you take a quiz it will be saved here.</div>
                                    </div>
                                    <Navbar className="navbar2" expand="lg"  >

                                        <NavLink className='nav-link2' to='/quiz' state={{ user: location.state.user }}>
                                            <Button id='naviBtn' size='lg' variant='primary' >Go To Quiz</Button>
                                        </NavLink>

                                    </Navbar>
                                </div>
                        }
                    </>
                    :
                    <div className="container loginPrompt ">
                        <div className='row'>
                            <div className='homeText'>To view previous quiz scores and art, <br />you must be logged in.</div>
                        </div>
                        <Button id='naviBtn' size='lg' variant='warning' onClick={() => navigate('/login')}>Log In</Button>
                    </div>
            }
        </div>
    )
}
export default Discover;