
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function App() {
  return (
    
    <div className="App">

<Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">BECHER Raouf</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Resume</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline className="right">
      <FormControl type="text" placeholder="GoMyCode" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
<br/> 
<Card style={{ width: '19rem' }}>
<ProfilePhoto className='img'/>
  <Card.Body>
  <FullName className='name'/>
  <Address className='address'/>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><strong>Email:raouf-94@live.fr</strong></ListGroupItem>
    <ListGroupItem>GSM:52550523</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button variant="outline-danger" size="lg">Download CV</Button>{' '}
  </Card.Body>
</Card>

   
   
     
    </div>
  );
}

export default App;
