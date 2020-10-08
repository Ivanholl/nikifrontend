import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';

export default function ContentModal(props) {

    return (
        <Modal
            show={props.show}
            onHide={() => props.setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.text}
                </p>
            </Modal.Body>
        </Modal>
    );
}
