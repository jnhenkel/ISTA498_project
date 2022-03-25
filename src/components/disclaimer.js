import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import '../index.css';

function Disclaimer() {
    const [show, setShow] = useState(true);
    
    

    const handleClose = () => {
        document.getElementById("blur").style.filter = "none";
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        document.getElementById("blur").style.filter = "blur(12px)";
    }
    
    return (
        <>{/*
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
    </Button> */}

            <Modal className="modal"
                show={show}
                onHide={handleClose}
                onEnter={handleShow}
                backdrop="static"
                keyboard={false}
            >
                <div >
                <Modal.Header>
                    <Modal.Title className="modalTitle">Content Warning:</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    The following application may contain material that may be harmful or traumatizing to some audiences.
                    <br/><br/>
                    By clicking 'I Acknowledge', you acknowledge that you have read and understand the above statement. 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        I Acknowledge
                    </Button>
                </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default Disclaimer;