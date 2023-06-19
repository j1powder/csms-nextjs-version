import {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import CompanySafetyInfo from '@/components/app-components/CompanySafetyInfo';
import UploadPDF from '@/hooks/UploadPDF';
import PDFViewer from '@/hooks/PDFViewer';

import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProfileInfo from '@/components/app-components/ProfileInfo';
import getCollection from '@/hooks/getCollection';
import { AuthContext } from '@/hooks/AuthContext';
import { useRouter } from 'next/router';

//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

import { TabView, TabPanel } from 'primereact/tabview';
        

import classes from '../styles/contractordash.module.css'





const ContractorDashbaord = () => {
 const [collectionData, setCollectionData] = useState([]);
 const {currentUser} = useContext(AuthContext);
  const router = useRouter();

  useEffect(()=>{
    currentUser ? router.push('/dashboard')
    : router.push('/')
  },[])

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

  //console.log(currentUser.uid);


    return <>
    <Head>
    <link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css"/>
</Head>
        <Container fluid className={classes.spacing}>
            <Row >
              <Col sm={12}>
                
                {currentUser && <h1>Welcome {currentUser.displayName}</h1>}
              </Col>
            </Row>
            <Row>
            <TabView>
                <TabPanel className={classes.tabpanel} header="Main">
                  <Container fluid>
                    <Row>
                      <Col>
                      <Card className={classes.card}><Card.Body>
                    <h2>My Dashboard Safety Info</h2>
                    <ProfileInfo userInfo={collectionData} />
                    </Card.Body></Card>
                      </Col>
                      <Col>
                      <Card className={classes.card}><Card.Body>
                    <h2>My Hiring Clients</h2>
                    </Card.Body></Card>
                      </Col>
                    </Row>
                  </Container>
                  </TabPanel>
                <TabPanel header="Company Safety Info">
                    <CompanySafetyInfo currUser={currentUser} />
                </TabPanel>
                <TabPanel header="Safety Questionnaire">
                    <h1>Fill out the Safety Form</h1>
                    <Button onClick={()=> {router.push('/safety-form')}}>Safety Form</Button>
                    
                    
                </TabPanel>
                <TabPanel header="Insurance">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Document Center">
                  <div>
                    <PDFViewer />
                  </div>
                    <h3>Upload a PDF</h3>
                    <UploadPDF />
                </TabPanel>
            </TabView>
      
            </Row>
            <Row>
              
{/*                 <Col sm={4}>
                  
<Card className={classes.card}><Card.Body>
    <Nav defaultActiveKey="/home" className="flex-column" variant='tabs'>
      <Nav.Item>
      <Nav.Link className={classes.sidenav} href="#">Safety</Nav.Link>
     
      </Nav.Item>
      <Nav.Link className={classes.sidenav} eventKey="link-1">Insurance</Nav.Link>
      <Nav.Link className={classes.sidenav} eventKey="link-2">Document Center</Nav.Link>
      <Nav.Link className={classes.sidenav} eventKey="disabled">Message Center</Nav.Link>
    </Nav> 
    </Card.Body></Card>
                </Col> */}
                {/* <Col sm={6}>
                <Card className={classes.card}><Card.Body>
                    <h2>My Dashboard Safety Info</h2>
                    <ProfileInfo userInfo={collectionData} />
                    </Card.Body></Card>
                </Col>
                <Col sm={6}>
                <Card className={classes.card}><Card.Body>
                    <h2>My Hiring Clients</h2>
                    </Card.Body></Card>
                </Col> */}
            </Row>
        </Container>
    </>
}

export default ContractorDashbaord;