import {useRef} from 'react';

import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import classes from '../../styles/safetyform.module.css'

const ContractorSafetyForm = (props) => {
  const companyName = useRef();
  const legalName = useRef();
  const dba = useRef();
  const physicalAddress = useRef();
  const city = useRef();
  const State = useRef();
  const zipCode = useRef();
  const companyPhone = useRef();
  const companyEmail = useRef();
  const taxid = useRef(); 
  const workTypeIndustry = useRef();
  const NAICSCode = useRef();
  const YearsInBusiness = useRef(); 
  const NumberOfEmployees = useRef();
  const MainSafetyContact = useRef();
  const PersonToContactForJobBids = useRef();
  const JobBidContactPhone = useRef();
  const JobBidContactEmail = useRef();
  const AccountsPayableContactName = useRef();
  const AccountsPayableContactPhone = useRef();
  const AccountsPayableContactEmail = useRef();
    

let company;
if(props.userCollection && props.currUser){
props.userCollection.map((user)=>{
if(user.email === props.currUser.email){
company = user.companyName
}
})
}

console.log(company)
  

const addDocument = async (collection) => {
    try {
      const collectionRef = projectFirestore.collection(collection);
  
      // Create a new document with an auto-generated ID
      const newDocumentRef = await collectionRef.add({
        companyName: 'value1',
        legalName: 'value2',
        dba:'',
        physicalAddress:'',
        city: '',
        State: '',
        zipCode: '',
        companyPhone: '',
        companyEmail: '',
        taxid:'',
        workTypeIndustry: '',
        NAICSCode: '',
        YearsInBusiness: '',
        NumberOfEmployees: '',
        MainSafetyContact: '',
        PersonToContactForJobBids: '',
        JobBidContactPhone: '',
        JobBidContactEmail: '',
        AccountsPayableContactName: '',
        AccountsPayableContactPhone: '',
        AccountsPayableContactEmail: ''
        // ... add more fields as needed
      });
  
      console.log('Document added with ID: ', newDocumentRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };




   return <>
    <div >
    <Card className={classes.spacing}>
        <Card.Body>
            <h2>Company Info</h2><br/>
    <Form >
        <Form.Group>
        <Form.Label>Company Name</Form.Label><Form.Control readOnly type='text' defaultValue={company} /> 
        <Form.Label>Legal Name(if different from above)</Form.Label><Form.Control ref={legalName} type='text' />
        <Form.Label>DBA(if applicable)</Form.Label><Form.Control type='text' ref={dba} />

        <Form.Label>Physical Street Address</Form.Label><Form.Control type='text' ref={physicalAddress} />
        <Form.Label>City</Form.Label><Form.Control type='text' ref={city} />
        <Form.Label>State</Form.Label><Form.Control type='email' ref={State} />
        <Form.Label>Zip Code</Form.Label><Form.Control type='password' ref={zipCode} />
        <Form.Label>Company Phone Number</Form.Label><Form.Control type='text' ref={companyPhone} />
        <Form.Label>Company Email</Form.Label><Form.Control type='text' ref={companyEmail} />
        <br/>
        <hr/>
        <br/>
        <Form.Label>Tax ID</Form.Label><Form.Control type='text' ref={taxid} />
        <Form.Label>Work Type Industry</Form.Label><Form.Control type='text' ref={workTypeIndustry} />
        <Form.Label>NAICS Code</Form.Label><Form.Control type='text' ref={NAICSCode} />
        <Form.Label>Years in Business</Form.Label><Form.Control type='email' ref={YearsInBusiness} />
        <Form.Label>Number of Current Employees</Form.Label><Form.Control type='password' ref={NumberOfEmployees} />
        <Form.Label>Main Safety Contact</Form.Label><Form.Control type='text' ref={MainSafetyContact} />
        <Form.Label>Person to Contact for New Job Bids</Form.Label><Form.Control type='text' ref={PersonToContactForJobBids} />
        <Form.Label>Contact Phone Number</Form.Label><Form.Control type='text' ref={JobBidContactPhone} />
        <Form.Label>Contact Email</Form.Label><Form.Control type='email' ref={JobBidContactEmail} />
        <br/>
        <hr/>
        <br/>
        <Form.Label>Accounts Payable Contact Name</Form.Label><Form.Control type='text' ref={AccountsPayableContactName} />
        <Form.Label>Accounts Payable Contact Phone</Form.Label><Form.Control type='text' ref={AccountsPayableContactPhone} />
        <Form.Label>Accounts Payable Contact Email</Form.Label><Form.Control type='text' ref={AccountsPayableContactEmail} />
        <br/>
        <Button variant='secondary'>Submit</Button>
        </Form.Group>
    </Form>
    </Card.Body>
    </Card>
    </div>
    </>
}

export default ContractorSafetyForm;