import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Randomadvice from './Randomadvice';

const Nameinput = () => {

    const [name, setName] = useState('Crewmember');
    const [namePut, setNamePut] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setName(document.querySelector(".input-field").value);
        setNamePut(true);
        console.log(name);
    }


    return (
        <div>
            <Row className="justify-content-sm-center">
                    <Form onSubmit={onSubmit}>
                        <input type= "text" placeholder="Sag mir deinen Namen" className="input-field"/>
                        <button type="submit">Zeig mir mein Zitat des Tages!</button>
                    </Form>
            </Row>
            {namePut === true && <Randomadvice name={name} />}
        </div>
    )
}

export default Nameinput
