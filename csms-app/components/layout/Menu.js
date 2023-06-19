import {useState,useContext} from 'react'
import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import { AuthContext } from '../../hooks/AuthContext'
import {useRouter} from 'next/router';

import classes from './Menu.module.css';

const Menu = () => {
const [show, setShow] = useState(false);
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const {currentUser, signIn, signOut } = useContext(AuthContext);
const router = useRouter();
  
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const user = await signIn(email, password);
    console.log('Logged in user:', currentUser);
    // Redirect or handle successful login
    setEmail('');
    setPassword('');
    setShow(false)
    router.push('/dashboard')
  } catch (error) {
    console.error('Login error:', error.message);
    // Handle error
  }
};
    console.log(currentUser)
    
    return <>
      <Navbar className={classes.fullmenu}>
        <Container>
          <Navbar.Brand href="/" className={classes.links}>CSMS</Navbar.Brand>
          <Nav className="me-auto">
          {!currentUser && <>
            <Link className={classes.links} href="/">Home</Link>
            <Link className={classes.links} href="/register">Register</Link>
             <Link className={classes.links} href="#" onClick={()=>{setShow(true)}}>Login</Link>
             </>}
            {currentUser && <>
            <Link className={classes.links} href="/dashboard">Dashboard</Link>
            <Link className={classes.links} href="/" onClick={signOut}>Logout</Link>
            </>}
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={()=>{setShow(false)}}>
        <Modal.Body>
        <Form onSubmit={handleLogin} className={classes.formbody}>
        <Form.Group>
        <Form.Label>Email</Form.Label><Form.Control type='email' onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Label>Password</Form.Label><Form.Control type='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <br/>
        <Button type='submit' variant='secondary'>Submit</Button>
        </Form.Group>
    </Form>
        </Modal.Body>
      </Modal>

    </>
}

export default Menu;