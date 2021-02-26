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
                </Row>
            </Container>
        </header>
    )
}

export default Header
