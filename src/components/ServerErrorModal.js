import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ServerErrorModal({
    errorOccured,
    handleClose
}) {

    return (
        <Modal show={errorOccured} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Oops..</Modal.Title>
            </Modal.Header>
            <Modal.Body>Encountered a problem! Please try again.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ServerErrorModal;