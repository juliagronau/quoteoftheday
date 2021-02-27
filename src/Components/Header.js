import React from 'react'
import Crewinkognito from '../Crewinkognito.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <header>
            <Container>
                <Row className="justify-content-sm-center">
                    <Col md="8">
                        <Image src={Crewinkognito} alt="Crew inkognito" fluid/>
                    </Col>
                    <Col md="4" pd-1>
                        <h1>Hello Crewmember!</h1><br></br>
                        <h2>Hier gibt's dein Zitat und deinen Witz des Tages</h2>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
