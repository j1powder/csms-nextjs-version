import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Footer.module.css';

const Footer = () => {

    return <>
<Container fluid className={classes.section}>
    <Row>
    <Col sm={4}>
<div>Contact Us <br/>(623)313-5230<br/>jpowder@letsbuilditbyjp.com</div>
</Col>
<Col sm={4}> Copyright&copy; 2023 | Let's Build It By JP LLC</Col>
<Col sm={4}></Col>
</Row></Container>
    </>
}

export default Footer;