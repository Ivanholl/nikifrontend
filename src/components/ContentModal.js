import React from 'react';
import { Modal } from 'react-bootstrap';
import parseHtml from 'html-react-parser';

export default function ContentModal(props) {

    return (
        <Modal
            show={props.show}
            onHide={() => props.setShow(false)}
            dialogClassName="modal-custom"
            size="lg"
            centered
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    parseHtml(props.text || "")
                }
            </Modal.Body>
        </Modal>
    );
}
