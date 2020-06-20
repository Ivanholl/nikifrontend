import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// import {backend} from '../../conf.js'
const backend = process.env.NODE_ENV === "production" ? '' : 'http://localhost:9000';


export default function ContactForm() {
    const [from, setFrom] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [showError, setShowError] = useState(false);
    
    let sendMail = async (e) => {
        e.preventDefault();
        if (!from || !phone || !text || !name) {
            setShowError(true)
            return;
        }
        setShowError(false)
        var data = {
            from: from,
            to: 'ivan.jelev@abv.bg',
            subject: 'Свържете се с нас',
            text: text
        }
        console.log(process.env)
        // Default options are marked with *
        const response = await fetch(backend + "/sendContactUsMail", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        response.json() // parses JSON response into native JavaScript objects       
        console.log(response);
        
    }
    
    return (
        <Form>
            <p>Свържете се с нас:</p>
            <Form.Group>
                <Form.Label>Име</Form.Label>
                <Form.Control type="text" onChange={e => setName(e.target.value) } value={name}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="phone" onChange={e => setPhone(e.target.value) } value={phone}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" onChange={e => setFrom(e.target.value) } value={from}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Съобщение</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={e => setText(e.target.value) } value={text}/>
            </Form.Group>
            {showError &&
                <p>Моля попълнете всички полета!</p>
            }
            <Button variant="success" type="submit" onClick={sendMail}>
                ИЗПРАТИ
            </Button>
        </Form>
    )
};
