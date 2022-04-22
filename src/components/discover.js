import { React, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
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
                        alert(x.message);
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
                            <div className='homeText'>To view previous quiz scores and art, <br/>you must be logged in.</div>
                        </div>
                        <Button id='naviBtn' size='lg' variant='warning' onClick={() => navigate('/login')}>Log In</Button>
                    </div>
            }
        </div>
    )
}
export default Discover;