import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
    return (
        <Form>
            <p>Свържете се с нас:</p>
            <Form.Group>
                <Form.Label>Име</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="phone"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Съобщение</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="success" type="submit">
                ИЗПРАТИ
            </Button>
        </Form>
    )
};
