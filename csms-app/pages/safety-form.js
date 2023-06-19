import React, { useState, useRef, useEffect, useContext} from 'react'
import ContractorSafetyForm from '@/components/app-components/ContractorSafetyForm';
import { AuthContext } from '@/hooks/AuthContext';
import getCollection from '@/hooks/getCollection';
import DrugAndAlcohol from '@/components/app-components/DrugAndAlchol';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import classes from '../styles/safetyform.module.css';




const SafetyForm = () => {
   const [collectionData, setCollectionData] = useState();
    const {currentUser} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const fetchCollection = async () => {
          try {
            const data = await getCollection('users');
            setCollectionData(data);
          } catch (error) {
            console.error('Error fetching collection:', error.message);
          }
        };
    
        fetchCollection();
      }, []);


    return<>
    <Button style={{margin:"1rem"}} onClick={()=> {router.push('/dashboard')}}>Back to Main</Button>
  <Tabs
      
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Company Info" title="Company Info">
       <ContractorSafetyForm userCollection={collectionData} currUser={currentUser} />
      </Tab>
      <Tab eventKey="Drug and Alcohol" title="Drug & Alcohol Program">
      <DrugAndAlcohol />      
      </Tab>
      <Tab eventKey="Safety Assessment" title="Safety Assessment" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="Training" title="Training" >
        <h1>Information on training</h1>
      </Tab>
    </Tabs>
       
    </>
}

export default SafetyForm;