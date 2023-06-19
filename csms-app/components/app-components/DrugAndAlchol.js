import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import classes from '../../styles/safetyform.module.css'

const DrugAndAlcohol = () => {

    return <>
    <Card className={classes.spacing}>
        <Card.Body>
            <h2>Drug and Alcohol and background Checks</h2><br/>
    <Form >
        <Form.Group>
        <Form.Label>Do you have a written drug and alcohol program?</Form.Label><Form.Control type='text' /> 
        <Form.Label>Do you have a random testing program in place?</Form.Label><Form.Control type='text' />
        <Form.Label>If yes to above, who is the company's designated employee representative(DER)?</Form.Label><Form.Control type='text' />

        <Form.Label>Do you have 3rd party administrator such as DISA, Pipeline Consortium, eScreen, etc.</Form.Label><Form.Control type='text' />
        <Form.Label>If yes to above, which one do you use?</Form.Label><Form.Control type='text' />
        <Form.Label>What type of drug tests are employees subject to?</Form.Label><Form.Control type='email' />
        <Form.Label>Do you perform DOT, NON-DOT or both?</Form.Label><Form.Control type='password' />
        <Form.Label>If DOT, which division?</Form.Label><Form.Control type='text' />
        <br/>
        <hr/>
        <br/>
        <Form.Label>Do you perform criminal background checks as a condition of employment?</Form.Label><Form.Control type='text' />
        <Form.Label>Do you perform any other background checks?</Form.Label><Form.Control type='text' />
         <br/>
        <Button variant='secondary'>Submit</Button>
        </Form.Group>
    </Form>
    </Card.Body>
    </Card>
    </>
}

export default DrugAndAlcohol;